const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Weather= require("../controllers/weather")
const Meme= require("../controllers/meme")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrictId",CowinController.getByDistrictId)
router.get("/weatherDetails", Weather.weatherDetails)
router.get("/weatherTemp", Weather.weatherTemp)
router.get("/getWeatherTempSorted",Weather.weatherTempSorted)
router.post("/memeWorld",Meme.memeWorld)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;