const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted:  {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Users', usersSchema)