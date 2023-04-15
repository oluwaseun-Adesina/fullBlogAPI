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
    console.log(salt)
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
  console.log(req.headers)
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
  profilePhotoUploadController
};
