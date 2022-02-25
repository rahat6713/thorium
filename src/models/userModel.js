const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
}, { timestamps: true });


const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName:{
        type: String,
        required:true
    },
    category:{
        type: String,
        enum:["Horror","Poetry","Political","Science","others"]
       },
    year:Number   

},{ timestamps: true});

module.exports = mongoose.model('User', userSchema) //users
module.exports = mongoose.model('book', bookSchema)
