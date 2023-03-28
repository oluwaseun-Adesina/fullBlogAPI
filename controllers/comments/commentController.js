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

// get single comment
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

//   delete comment
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

// update comment
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