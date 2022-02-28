
const BookModel= require("../models/bookModel-1")




const createBooks= async function(req, res) {
    let data=req.body
    let bookData= await BookModel.create(data)
    res.send({msg:bookData})
}
const bookList= async function(req, res) {
    let bookData= await BookModel.find().select({ bookName:1, authorName:1,_id:0})
    res.send({msg:bookData})
}
const getBooksInYear= async function(req, res) {
    let bookData= await BookModel.find({ year:2010 })
    res.send({msg:bookData})
}
const getParticularBooks= async function(req, res) {
     let book=req.body
    let bookData= await BookModel.find(book)
    res.send({msg:bookData})
}
const getXINRBooks= async function(req, res) {
    let bookData= await BookModel.find({"prices.indianPrice":{$in:["100","200","500"]}})
    res.send({msg:bookData})
}
const getRandomBooks= async function(req, res) {
    let bookData= await BookModel.find({ $or: [ {stockavailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:bookData})
}






module.exports.createBooks= createBooks
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks