const jsonwebtoken = require("jsonwebtoken");

const Midware= function(req,res,next) {
    let token =req.headers["x-auth-token"]
    if(!token) return res.send({msg:"token must be present"})

    let decodedToken = jsonwebtoken.verify(token, "FunctionUp-thorium");
    if(!decodedToken) return res.send({msg:"token is invalid"})
     
    next()
}


module.exports.Midware=Midware