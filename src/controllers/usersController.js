const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");


const createUsers= async function(req,res) {
  let  data=req.body
  let savedData= await usersModel.create(data)
  res.send({Data:savedData})

}

const loginUser= async function(req,res) {
    let userName=req.body.emailId
    let password=req.body.password
    let User= await usersModel.findOne({emailId:userName,password:password})
    if(!User) 
    return res.send({msg:"Cannot login as userName and password not matched"});

    let token= jwt.sign({userId:User._id,batch:"thorium"},"FunctionUp-thorium")
    res.setHeader("x-auth-token", token);
    res.send({msg:"your login is successfull",data:token})
}

const getUserData= async function(req, res) {

    let userId=req.params.userId
    let userDetails= await usersModel.findById(userId)
    if(!userDetails) return res.send({msg:"no such user exist"})

    res.send({msg:"user exist",Data:userDetails})
}


const updatedUser= async function(req,res) {

    let userId=req.params.userId
    let userDetails= await usersModel.findById(userId)
    if(!userDetails) return res.send({msg:"no such user exist"})
    
    let userData= req.body
    let updatedUser= await usersModel.findOneAndUpdate({_id:userId},userData,{new:true})
    res.send({data:updatedUser})

}

const deletedUser= async function(req,res) {

    let userId=req.params.userId
    let userDetails= await usersModel.findById(userId)
    if(!userDetails) return res.send({msg:"no such user exist"})
     
    let userDeleted= await usersModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
    res.send({data:userDeleted})
}




module.exports.createUsers= createUsers
module.exports.loginUser= loginUser
module.exports.getUserData= getUserData
module.exports.updatedUser= updatedUser
module.exports.deletedUser= deletedUser