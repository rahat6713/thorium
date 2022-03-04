const basicCode= function(req,res,next) {
    console.log("welceome to handler");
    res.send("you are a step to log in")
    
}



module.exports.basicCode=basicCode