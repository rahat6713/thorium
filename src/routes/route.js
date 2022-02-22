const myObj = require('../validator/formatter');
const myNewObj=require('../util/helper');
const obj = require('./logger');
const lod = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    obj.welcomeMessage('Welcome to my application.I am Rahat Ali and a part of FunctionUp Thorium cohort')
     console.log(obj.endPoint)
    myObj.myTrim()
    console.log(myNewObj.varNew);
     myNewObj.dateInfo();
     myNewObj.month();
     myNewObj.batchInfo();
    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
   console.log(lod.chunk(["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],3));
   console.log(lod.tail([1,3,5,7,9,11,13,15,17],9));
   console.log(lod.union([1,2],[3,4,2],[5,6,7,1],[8,9,11],[4,12,13]));
   console.log(lod.fromPairs([["Rahat",1],["Ali",2]]));
    res.send('Hello there')

});

module.exports = router;