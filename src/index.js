const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { months } = require('moment');
const app = express();
const moment = require('moment');
const Router = require('router');
var ip = require('ip');
const router = require('./routes/route.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const midGlb= function(req,res,next) {
    
    const today = moment();
    let x= today.format()
    let Ip =ip.address()
    console.log(x,Ip)
    
    
      next()
}

app.use( midGlb)


 app.use('/', route);
 


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
