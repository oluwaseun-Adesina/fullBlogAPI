// post create
const postCreateController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Post Created"
      })
    }catch(error){
       res.json(error.message)
    }
  }

//   get single post
const getSinglePostController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "Single post route"
      })
    }catch(error){
       res.json(error.message) 
    }
  }

//   get all post controller
const getAllPostController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "posts route"
      })
    }catch(error){
       res.json(error.message)
    }
  }


// delete post controller 
const postDeleteController =  async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "post delete route"
      })
    }catch(error){
       res.json(error.message)
    }
  }

  const postUpdateController = async (req, res) =>{
    try{
      res.json({
        status: "success",
        data: "post update route"
      })
    }catch(error){
       res.json(error.message)
    }
  }

  module.exports = {
    postCreateController,
    getSinglePostController,
    getAllPostController,
    postDeleteController,
    postUpdateController
  }