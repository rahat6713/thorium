const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");


const createUsers = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length == 0) {
            res.status(400).send({ msg: "BAD REQUEST" })
        }
        else {
            let savedData = await usersModel.create(data)
            res.status(201).send({ Data: savedData })
        }
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }
}

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId
        let password = req.body.password
        if (!(userName && password)) {
            res.status(400).send({ msg: "BAD REQUEST" })
        } else {
            let User = await usersModel.findOne({ emailId: userName, password: password })
            if (!User)
                return res.status(403).send({ msg: "Cannot login as userName and password not matched" });

            let token = jwt.sign({ userId: User._id, batch: "thorium" }, "FunctionUp-thorium")
            res.setHeader("x-auth-token", token);
            res.status(201).send({ msg: "your login is successfull", data: token })
        }
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err:error })
    }

}




const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId
        if (!userId) {
            res.status(400).send({ msg: "BAD REQUEST" })
        } else {
            let userDetails = await usersModel.findById(userId)
            if (!userDetails) return res.status(404).send({ msg: "no such user exist" })

            res.status(200).send({ msg: "user exist", Data: userDetails })
        }
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }
}


const updatedUser = async function (req, res) {
    try {
        let userId = req.params.userId
        if (!userId) {
            res.status(400).send({ msg: "BAD REQUEST" })
        } else {
            let userDetails = await usersModel.findById(userId)
            if (!userDetails) return res.status(404).send({ msg: "no such user exist" })

            let userData = req.body
            let updatedUser = await usersModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
            res.status(201).send({ data: updatedUser })
        }
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }

}

const deletedUser = async function (req, res) {
    try {
        let userId = req.params.userId
        if (!userId) {
            res.status(400).send({ msg: "BAD REQUEST" })
        }
        let userDetails = await usersModel.findById(userId)
        if (!userDetails) return res.status(404).send({ msg: "no such user exist" })

        let userDeleted = await usersModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
        res.status(201).send({ data: userDeleted })
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }
}

const postMessage = async function (req, res) {
    try {
        let message = req.body.message
        let userId = req.params.userId
        if (!(message && userId)) {
            res.status(400).send({ msg: "BAD REQUEST" })
        }
        let userDetails = await usersModel.findById(userId)
        if (!userDetails) return res.status(404).send({ msg: "user not exist" })
        let updatedPosts = userDetails.posts
        updatedPosts.push(message)
        let updatedUser = await usersModel.findOneAndUpdate({ _id: userId }, { posts: updatedPosts }, { new: true })
        res.status(201).send({ data: updatedUser })
    }
    catch (error) {
        console.log("This is the error:", error.message)
        res.status(500).send({ msg: "server error", err: error })
    }

}




module.exports.createUsers = createUsers
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updatedUser = updatedUser
module.exports.deletedUser = deletedUser
module.exports.postMessage = postMessage