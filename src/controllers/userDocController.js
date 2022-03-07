const UserDocumentModel= require("../models/userDocumentModel")


const createUserDoc= async function (req, res) {
    let data= req.body
    // let IsFreeAppUSer= req.body.isFreeAppUser
    // console.log(!IsFreeAppUSer)
    // if(!data.hasOwnProperty('isFreeAppUser')) 
      // return  res.send('the request is missing a mandatory header')
    // data.freeAppUser=req.isFreeAppUser
    let userData= await UserDocumentModel.create(data)
    res.send({msg: userData})
}


module.exports.createUserDoc= createUserDoc