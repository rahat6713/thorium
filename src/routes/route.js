const express = require('express');
const router = express.Router();
const usersController= require("../controllers/usersController")
const Middleware = require("../Middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", usersController.createUsers  )

router.post("/login", usersController.loginUser)

// //The userId is sent by front end
router.get("/users/:userId",Middleware.Midware, usersController.getUserData)

router.put("/users/:userId",Middleware.Midware, usersController.updatedUser)

router.delete("/users/:userId",Middleware.Midware, usersController.deletedUser)

module.exports = router;