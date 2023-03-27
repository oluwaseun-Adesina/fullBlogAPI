// create comments
const commentCreateController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Comment Created"
      })
    }catch(error){
       res.json(error.message)
    }
  }

const getSingleCommentController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Comment route"
      })
    }catch(error){
       res.json(error.message)
    }
  }

const commentDeleteController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "comments delete route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

const commentUpdateController = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "Comments update route"
        })
    } catch (error) {
        res.json(error.message)
    }
}

  module.exports = {
    commentCreateController,
    getSingleCommentController,
    commentDeleteController,
    commentUpdateController
  }