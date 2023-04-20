const jwt = require("jsonwebtoken")

const verifyToken = token =>{
    return jwt.verify(token, process.env.jwtKEY, (err, decoded) =>{
        // console.log(err)
        if(err){
            return false
        }else{
           return decoded;
        }
    }) 
}

module.exports = verifyToken