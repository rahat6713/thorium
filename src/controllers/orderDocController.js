const OrderDocumentModel= require("../models/orderDocumentModel")
const UserDocumentModel = require("../models/userDocumentModel")
const ProductDocumentModel = require("../models/productDocumentModel")
const userModel = require("../models/userModel")


const createOrder= async function (req, res) {
    let data= req.body
    let userid=data.userId
    let productid=data.productId
    let freeAppUser=req.headers.isfreeappuser
    if(!userid) {
        res.send("UserId is requird")
    }
    if(!productid) {
        res.send("ProductId is required")
    }
    let userIsValid= await UserDocumentModel.findById(userid)
    if(!userIsValid) {
        res.send("userId not present")
    }
    let ProductIsValid= await ProductDocumentModel.findById(productid)
    if(!ProductIsValid) {
        res.send("ProductId is not present")
    }
    let ProductDetail= await ProductDocumentModel.findById(productid)
    let PriceValue=ProductDetail.price

    let UserDetails= await UserDocumentModel.findById(userid)
    let userBalance=UserDetails.balance
    
    if(freeAppUser==="false") {
        if(userBalance>PriceValue) {
            let updatedBalance=await userModel.findByIdAndUpdate({_id:userid},{$inc:{balance:-PriceValue}},{new:true})
        
            data.amount=PriceValue
        data.isfreeappuser=false
        let orderDetail=await OrderDocumentModel.create(data)
        res.send({order:orderDetail})
      } else{
          res.send({error:"inSufficient Balance"})
      }


    } else{
        data.amount=0;
        data.isfreeappuser=true
        let OrderDetail=await OrderDocumentModel.create(data)
        res.send({order:OrderDetail});
    }

      
      

}

    


   

module.exports.createOrder= createOrder