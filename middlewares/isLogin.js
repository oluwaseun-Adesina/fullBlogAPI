const { appErr } = require("../utils/appErr");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");


const isLogin = (req, res, next) => {
    // get token
    const token = getTokenFromHeader(req);

    // verify token
    const decodedUser = verifyToken(token)

    // save the user into req object
    req.userAuth = decodedUser.id
    if(!decodedUser){
        return next(appErr("Invalid/Expired token, please login again", 500))
    }else{

        next();
    }
}

module.exports = isLogin 



// if (token) {
    //     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) {
    //         res.json({
    //         status: "failed",
    //         message: "Token is not valid",
    //         });
    //     } else {
    //         req.user = decoded;
    //         next();
    //     }
    //     });
    // } else {
    //     res.json({
    //     status: "failed",
    //     message: "There is no token attached to the header",
    //     });
    // }