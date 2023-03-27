// create category
const categoryCreateController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Category Created"
      })
    }catch(error){
       res.json(error.message)
    }
  }

const getSingleCategoryController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Single Category route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const categoryDeleteController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Category delete route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const categoryUpdateController =  async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Categories update route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

  module.exports = {
    categoryCreateController,
    categoryDeleteController,
    getSingleCategoryController,
    categoryUpdateController
  }