const jsonwebtoken = require("jsonwebtoken");

const Midware = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(401).send({ msg: "token must be present" })

        let decodedToken = jsonwebtoken.verify(token, "FunctionUp-thorium");
        if (!decodedToken) return res.status(401).send({ msg: "token is invalid" })
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }

    next()
}

const Authrisation = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        let decodedToken = jsonwebtoken.verify(token, "FunctionUp-thorium");
        let userToBeModified = req.params.userId
        if(!userToBeModified) {
            res.status(400).send({msg:"BAD REQUEST"})
        }
        let userLoggedIn = decodedToken.userId
        if (userToBeModified != userLoggedIn) return res.status(403).send("msg:no such user exist")
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }
    next()
}


module.exports.Midware = Midware
module.exports.Authrisation = Authrisation