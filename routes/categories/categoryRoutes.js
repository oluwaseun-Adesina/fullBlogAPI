const express = require('express')
const { categoryCreateController, categoryDeleteController, categoryUpdateController, getSingleCategoryController } = require('../../controllers/categories/categoryController')
const categoryRouter = express.Router()

// post/api/v1/categories
categoryRouter.post('/', categoryCreateController)

// get/api/v1/categories/:id
categoryRouter.get('/:id', getSingleCategoryController)


// delete/api/v1/categories/:id
categoryRouter.delete('/:id', categoryDeleteController )

// put/api/v1/categories/:id
categoryRouter.put('/:id', categoryUpdateController)




module.exports = categoryRouter