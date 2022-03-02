const { count } = require("console");
const newAuthorModel = require("../models/newAuthorModel")


const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorData = await newAuthorModel.create(author)
    res.send({data: authorData})
}

module.exports.createNewAuthor= createNewAuthor