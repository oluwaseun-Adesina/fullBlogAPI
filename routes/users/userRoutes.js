const express = require('express')
const { userRegisterController, userUpdateController, userDeletionController, allUsersController, userLoginController, userProfileController, profilePhotoUploadController } = require('../../controllers/users/userController');
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

// put/api/v1/users/register
userRouter.post(
  '/profile-photo-upload',
  isLogin,
  upload.single('profile '),
  profilePhotoUploadController
)

module.exports = userRouter;