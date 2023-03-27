const express = require('express')
const { postUpdateController,postDeleteController ,postCreateController, getAllPostController, getSinglePostController } = require('../../controllers/posts/postController');


const postRouter = express.Router()


// post/api/v1/posts
postRouter.post('/', postCreateController)
  
  // get/api/v1/posts/:id
  postRouter.get('/:id', getSinglePostController)
  
  // get/api/v1/posts
  postRouter.get('/', getAllPostController)
  
  // delete/api/v1/posts/:id
  postRouter.delete('/:id', postDeleteController)
  
  // put/api/v1/posts/:id
  postRouter.put('/:id', postUpdateController )
  

  module.exports = postRouter