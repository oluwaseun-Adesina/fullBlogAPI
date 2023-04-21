const User = require("../model/User/User");
const { appErr } = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");


const isAdmin = async (req, res, next) => {
    // get token
    const token = getTokenFromHeader(req);

    // verify token
    const decodedUser = verifyToken(token)

    // save the user into req object
    req.userAuth = decodedUser.id

    // find the user in database
    const user = await User.findById(decodedUser.id)

    // check if user is admin
    if(user.isAdmin){
        return next()
    }else{
        return next(appErr("Access Denied, admin only", 403))
    }
}

module.exports = isAdmin 
