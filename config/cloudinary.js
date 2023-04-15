const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary')
require('dotenv').config()

// configure cloudinary

cloudinary.config({
    cloud_name: process.env.cloudinaryCloudName,
    api_key: process.env.cloudinaryApiKey,
    api_secret: process.env.cloudinaryApiSecretKey
})

// instance of cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg','png'],
    params:{
        folder: 'blogApi',
        transformation: [{width: 500, height: 500, crop: "limit"}]
    }
})

module.exports = storage