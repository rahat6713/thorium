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
    if(!authorDetail) {
        res.send('Author not present')
    }
    let publisherDetail= await newPublisherModel.findById(publisherId)
    if(!publisherDetail) {
        res.send('Publisher not present')
    }
    let newBookData= await newBookModel.create(book)
    res.send({data:newBookData})

}
//     if (authorDetail && publisherDetail) {
//         let newBookData = await newBookModel.create(book)
//         res.send({data: newBookData})
//    }else if(!authorDetail) {
//           res.send('author not present')
//    } else {
//        res.send('publisher not present')
//    }



const getAllBookAuthor = async function(req, res) {
    let booksAuthor= await newBookModel.find().populate('author publisher')
    res.send({data: booksAuthor})
}

const putBooks= async function (req,res) {
     let PublisherDetail = await newPublisherModel.find({name:{$in:["Penguin","HarperCollins"]}})
     let publisherId=PublisherDetail.map(ele=>ele._id)
     await newBookModel.updateMany({ publisher: { $in:publisherId }},{isHardCover:true},{new:true});

     let ratedAuthor= await newAuthorModel.find({rating:{$gt:3.5}})
     let authorId=ratedAuthor.map(ele=>ele._id)
     await newBookModel.updateMany({author:{$in:authorId}},{$inc:{price:10}})
     
    let UpdatedBookModel= await newBookModel.find()
    
    res.send({data: UpdatedBookModel})
}



    
module.exports.createNewBook= createNewBook
module.exports.getAllBookAuthor= getAllBookAuthor
module.exports.putBooks= putBooks