const express = require('express');
const { commentCreateController, commentUpdateController,commentDeleteController, getSingleCommentController } = require('../../controllers/comments/commentController')
const commentRouter = express.Router()


// post/api/v1/comments
commentRouter.post('/', commentCreateController)

// get/api/v1/comments/:id
commentRouter.get('/:id', getSingleCommentController)


// delete/api/v1/comments/:id
commentRouter.delete('/:id', commentDeleteController )

// put/api/v1/comments/:id
commentRouter.put('/:id', commentUpdateController )

module.exports = commentRouter