const { count } = require("console");
const newAuthorModel = require("../models/newAuthorModel");
const newBookModel = require("../models/newBookModel");
const newPublisherModel = require("../models/newPublisherModel");


const createNewBook=async function (req, res) {
    let book = req.body
    
    let authorId= req.body.author
    let publisherId= req.body.publisher
    if(!authorId) {
        res.send('author is required')
    }
    if(!publisherId) {
        res.send('publisher is required')
    }

    let authorDetail= await newAuthorModel.findById(authorId)
    let publisherDetail= await newPublisherModel.findById(publisherId)
    if (authorDetail && publisherDetail) {
        let newBookData = await newBookModel.create(book)
        res.send({data: newBookData})
   }else if(!authorDetail) {
          res.send('author not present')
   } else {
       res.send('publisher not present')
   }
}


const getAllBookAuthor = async function(req, res) {
    let booksAuthor= await newBookModel.find().populate('author publisher')
    res.send({data: booksAuthor})
}



    

module.exports.createNewBook= createNewBook
module.exports.getAllBookAuthor= getAllBookAuthor