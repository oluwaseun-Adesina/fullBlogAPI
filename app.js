const express = require('express')
require('dotenv').config()
require("./config/dbConnect")
const app = express()

// middlewares
// routes
// error handlers middleware
// listen to server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});  