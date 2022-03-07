const Midware= function(req,res,next) {
    let isFreeAppUser=req.headers["isfreeappuser"]
    if (isFreeAppUser!=undefined) {
        next();
    } else{
    res.send({msg:"the request is missing a mandatory header"})

    }


}



    // let appTypeHeader=req.headers['isFreeApp']
    // let isAppFree
    // if(!appTypeHeader) {
    //     return res.send({msg:'the request is missing a mandatory header'})
    // }
    // if(appTypeHeader==='false') {
    //    isAppFree=false
    // } else {
    //     isAppFree=true
    // }
    //    req.isFreeAppUser=isAppFree
    //    next()




    



module.exports.Midware=Midware