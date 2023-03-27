// register
const userRegisterController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "User registered"
      })
    }catch(error){
       res.json(error.message)
    }
  }

//   login
const userLoginController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "User login"
      })
    }catch(error){
       res.json(error.message)
    }
  }

//   get user profile
const userProfile = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Profile route"
      })
    }catch(error){
       res.json(error.message)
    }
  }

//   get all users
const allUsersController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "All User Routes"
      })
    }catch(error){
       res.json(error.message)
    }
  }

// delete user
const userDeletionController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Delete User route"
      })
    }catch(error){
       res.json(error.message)
    }
  }

//   update user
const userUpdateController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Update User"
      })
    }catch(error){
       res.json(error.message)
    }
  }

  module.exports = {
    userRegisterController,
    userLoginController,
    userProfile,
    allUsersController,
    userDeletionController,
    userUpdateController
  }