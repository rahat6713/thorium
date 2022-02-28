const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController-1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", BookController1.createBooks)
router.get("/bookList", BookController1.bookList)
router.get("/getBooksInYear", BookController1.getBooksInYear)
router.get("/getParticularBooks", BookController1.getParticularBooks)
router.get("/getXINRBooks", BookController1.getXINRBooks)
router.get("/getRandomBooks", BookController1.getRandomBooks)

module.exports = router;