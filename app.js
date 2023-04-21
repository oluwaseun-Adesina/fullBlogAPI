const express = require('express')
const morgan = require('morgan')
const userRouter = require('./routes/users/userRoutes')
const postRouter = require('./routes/posts/postRoutes')
const commentRouter = require('./routes/comments/commentRoutes')
const categoryRouter = require('./routes/categories/categoryRoutes')
const globalErrorHandler = require('./middlewares/globalErrorHandler')
const isAdmin = require('./middlewares/isAdmin')


require('dotenv').config()
require("./config/dbConnect")

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(isAdmin)

// routes

// users routes
app.use('/api/v1/users', userRouter)

// posts routes
app.use('/api/v1/posts', postRouter)

// comments routes
app.use('/api/v1/comments', commentRouter)
// categories routes

app.use('/api/v1/categories', categoryRouter)

// error handlers middleware
app.use(globalErrorHandler)

// 404 error 
app.use('*',(req, res) =>{
  console.log(req.originalUrl)
  res.status(404).json({
    message: `${req.originalUrl} Route not found`
  })
})
// listen to server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});  