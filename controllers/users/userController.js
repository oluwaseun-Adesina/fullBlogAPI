const User = require("../../model/User/User");
const bcrypt = require('bcryptjs');
const generateToken = require("../../utils/generateToken");


// register
const userRegisterController = async (req, res) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    // check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        msg: "User Already Exist",
      });
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
    res.json(error.message);
  }
};

//   login
const userLoginController = async (req, res) => {
  const { email, password} = req.body
  try {
    // check if email exist
    const userFound = await User.findOne({email});
    if(!userFound){
      return res.json({
        msg: "Invalid login credential"
      })
    }

    // verify password
    const isPasswordMatched = await bcrypt.compare(password, userFound.password)


    if(!isPasswordMatched){
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
  
  const { id } = req.params 
  try {

    // get token from header
    const headerObj = req.headers;
    const token = headerObj.authorization;
    console.log(token)
    const user = await User.findById(id)
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

module.exports = {
  userRegisterController,
  userLoginController,
  userProfileController,
  allUsersController,
  userDeletionController,
  userUpdateController,
};
