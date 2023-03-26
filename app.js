const express = require('express')
require('dotenv').config()
require("./config/dbConnect")
const app = express()

// middlewares
// routes

// users routes

// post/api/v1/users/register
app.post('/api/v1/users/register', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "User registered"
    })
  }catch(error){
     res.json(error.message)
  }
})

// post/api/v1/users/login
app.post('/api/v1/users/login', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "User login"
    })
  }catch(error){
     res.json(error.message)
  }
})

// get/api/v1/users/:id
app.get('/api/v1/users/profile/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Profile route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// get/api/v1/usersr
app.get('/api/v1/users', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "User Routes"
    })
  }catch(error){
     res.json(error.message)
  }
})


// delete/api/v1/users/register
app.delete('/api/v1/users/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Delete User route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// put/api/v1/users/register
app.put('/api/v1/users/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Update User"
    })
  }catch(error){
     res.json(error.message)
  }
})


// posts routes

// post/api/v1/posts
app.post('/api/v1/posts', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Post Created"
    })
  }catch(error){
     res.json(error.message)
  }
})

// get/api/v1/posts/:id
app.get('/api/v1/posts/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Single post route"
    })
  }catch(error){
     res.json(error.message) 
  }
})

// get/api/v1/posts
app.get('/api/v1/posts', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "posts route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// delete/api/v1/posts/:id
app.delete('/api/v1/posts/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "post delete route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// put/api/v1/posts/:id
app.put('/api/v1/posts/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "post update route"
    })
  }catch(error){
     res.json(error.message)
  }
})
// comments routes

// post/api/v1/comments
app.post('/api/v1/comments', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Comment Created"
    })
  }catch(error){
     res.json(error.message)
  }
})

// get/api/v1/comments/:id
app.get('/api/v1/comments/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Comment route"
    })
  }catch(error){
     res.json(error.message)
  }
})


// delete/api/v1/comments/:id
app.delete('/api/v1/comments/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "comments delete route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// put/api/v1/comments/:id
app.put('/api/v1/comments/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Comments update route"
    })
  }catch(error){
     res.json(error.message)
  }
})
// categories routes

// post/api/v1/categories
app.post('/api/v1/categories', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Category Created"
    })
  }catch(error){
     res.json(error.message)
  }
})

// get/api/v1/categories/:id
app.get('/api/v1/categories/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Category route"
    })
  }catch(error){
     res.json(error.message)
  }
})


// delete/api/v1/categories/:id
app.delete('/api/v1/categories/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Category delete route"
    })
  }catch(error){
     res.json(error.message)
  }
})

// put/api/v1/categories/:id
app.put('/api/v1/categories/:id', async (req, res) =>{
  try{
    res.json({
      status: "success",
      data: "Categories update route"
    })
  }catch(error){
     res.json(error.message)
  }
})


// error handlers middleware
// listen to server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});  