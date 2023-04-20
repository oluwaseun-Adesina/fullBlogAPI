const express = require('express')
const { 
  userRegisterController, 
  userUpdateController, 
  userDeletionController, 
  allUsersController, 
  userLoginController, 
  userProfileController, 
  profilePhotoUploadController,
  whoViewMyProfileController,
  followingController,
  unfollowController
} = require('../../controllers/users/userController');
const isLogin = require('../../middlewares/isLogin');
const storage = require('../../config/cloudinary');
const multer = require('multer')

// instance of multer
const upload = multer({ storage })


const userRouter = express.Router()

userRouter.post('/register', userRegisterController)

// post/api/v1/users/login
userRouter.post('/login', userLoginController)

// get/api/v1/users/:id
userRouter.get('/profile/', isLogin, userProfileController)

// get/api/v1/usersr
userRouter.get('/', allUsersController)


// delete/api/v1/users/register
userRouter.delete('/:id', userDeletionController)

// put/api/v1/users/register
userRouter.put('/:id', userUpdateController)

// get/api/v1/users/profileviewers/:id
userRouter.get('/profile-viewers/:id', isLogin, whoViewMyProfileController)

// get/api/v1/users/following/:id
userRouter.get('/following/:id', isLogin, followingController)

// // get/api/v1/users/unfollowing/:id
userRouter.get('/unfollowing/:id', isLogin, unfollowController)



// put/api/v1/users/register
userRouter.post(
  '/profile-photo-upload',
  isLogin,
  upload.single('profile'),
  profilePhotoUploadController
)

module.exports = userRouter;