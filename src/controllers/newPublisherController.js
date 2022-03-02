const { count } = require("console");
const newPublisherModel = require("../models/newPublisherModel")



const createNewPublisher= async function (req, res) {
    let publisher = req.body
    let publisherData = await newPublisherModel.create(publisher)
    res.send({data: publisherData})
}

module.exports.createNewPublisher= createNewPublisher