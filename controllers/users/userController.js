const User = require("../../model/User/User");
const bcrypt = require('bcryptjs');
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const { appErr, AppErr } = require("../../utils/appErr");


// register
const userRegisterController = async (req, res, next) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    // check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(apprr("User Already Exist", 500))
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
      firstname,
      lastname,
      // profilePhoto,
      email,
      password: hashedPassword
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//   login
const userLoginController = async (req, res) => {
  const { email, password } = req.body
  // console.log(req.headers)
  try {
    // check if email exist
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.json({
        msg: "Invalid login credential"
      })
    }

    // verify password
    const isPasswordMatched = await bcrypt.compare(password, userFound.password)


    if (!isPasswordMatched) {
      return res.json({
        msg: "Invalid login credential"
      })
    }

    res.json({
      status: "success",
      data: {
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound._id)
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};

// who view my profile
const whoViewMyProfileController = async (req, res, next) => {
  try {
    // find the original user
    const user = await User.findById(req.params.id)
    //  find the user who viewed the profile
    const userWhoViewed = await User.findById(req.userAuth)
    // check if the two are found
    if (user || userWhoViewed) {
      // check if the user is already in the array of viewers
      const isUserAlreadyViewed = user.viewers.find(viewer => viewer.toString() === userWhoViewed._id.toString())
     if(isUserAlreadyViewed){
        return next(appErr("You have already viewed this profile", 400))
      }else{
        // push the user to the array of viewers
        user.viewers.push(userWhoViewed._id)
        await user.save()
        res.json({
          status: "success",
          data: "You have successfully viewed this profile"
        }) 
  
      }
    }
  } catch (error) {
    res.json(error.message);
  }
};

// following
const followingController = async (req, res, next) => {
  try {
    // find the original user to follow
    const userToFollow = await User.findById(req.params.id)
    //  find the user who is following
    const userWhoFollowed = await User.findById(req.userAuth)

    // check if the two are found
    if (userToFollow && userWhoFollowed) {
      // check if userwhoFollowed is already in the array of followers
      const isUserAlreadyFollowed = userToFollow.followers.find(
        follower => follower.toString() === userWhoFollowed._id.toString()
        )
      if (isUserAlreadyFollowed) {
        return next(appErr("You have already followed this user", 400))
      }else{
        // push the userwhofollowed to the array of followers
        userToFollow.followers.push(userWhoFollowed._id)
        // push the userToFollow to the array of following
        userWhoFollowed.following.push(userToFollow._id)
        // save the userWhoFollowed
        await userToFollow.save()
        // save the userToFollow
        await userWhoFollowed.save()
        res.json({
          status: "success",
          data: "You have successfully followed this user"
        }) 
      }
    }

  } catch (error) {
    res.json(error.message);
  }
};

// unfollow
const unfollowController = async (req, res, next) => {
  try {
    // find the original user to follow
    const userToUnfollow = await User.findById(req.params.id)
    //  find the user who is following
    const userWhoUnfollowed = await User.findById(req.userAuth)

    // check if the two are found
    if (userToUnfollow && userWhoUnfollowed) {
      // check if userwhoFollowed is already in the array of followers
      const isUserAlreadyFollowed = userToUnfollow.followers.find(
        follower => follower.toString() === userWhoUnfollowed._id.toString()
        )
      if (!isUserAlreadyFollowed) {
        return next(appErr("You have not followed this user", 400))
      }else{
        // remove the userwhofollowed to the array of followers
        userToUnfollow.followers = userToUnfollow.followers.filter(follower => follower.toString() !== userWhoUnfollowed._id.toString())
        // remove the userToFollow to the array of following
        userWhoUnfollowed.following = userWhoUnfollowed.following.filter(following => following.toString() !== userToUnfollow._id.toString())
        // save the userWhoFollowed
        await userToUnfollow.save()
        // save the userToFollow
        await userWhoUnfollowed.save()
        res.json({
          status: "success",
          data: "You have successfully unfollowed this user"
        })
      }
    }

  } catch (error) {
    res.json(error.message);
  }
};

//   get user profile
const userProfileController = async (req, res) => {
  // console.log(req.userAuth)
  const { id } = req.params
  // console.log(req.header)
  try {

    // const token = getTokenFromHeader(req)
    // console.log(token)
    const user = await User.findById(req.userAuth)
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//   get all users
const allUsersController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "All User Routes",
    });
  } catch (error) {
    res.json(error.message);
  }
};

// delete user
const userDeletionController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Delete User route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

//   update user
const userUpdateController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Update User",
    });
  } catch (error) {
    res.json(error.message);
  }
};

// profile photo upload
const profilePhotoUploadController = async (req, res, next) => {

  try {
    // find the user to be updated
    const userToUpdate = await User.findById(req.userAuth);
    // check if user is found
    if (!userToUpdate) {
      return next(appErr("User not found", 403))
    }
    // check if user is blocked
    if (userToUpdate.isBlocked) {
      return next(appErr("Action not allowed, your account is blocked", 403))
    }
    // check if a user is updating their photo
    if (req.file) {
      // update the profile photo
      await User.findByIdAndUpdate(req.userAuth, {
        $set: {
          profilePhoto: req.file.path
        }
      },
      {
        new: true
      }
    );
    res.json({
        status: "success",
        data: "You have successfully Updated your profile photo",
      });
    }

    
  } catch (error) {
    next(appErr(error.message, 500))
  }
}

module.exports = {
  userRegisterController,
  userLoginController,
  userProfileController,
  allUsersController,
  userDeletionController,
  userUpdateController,
  profilePhotoUploadController,
  whoViewMyProfileController,
  followingController,
  unfollowController
};
