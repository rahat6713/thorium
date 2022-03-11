let axios = require("axios")


let weatherDetails = async function (req, res) {
    try {
        let city = req.query.q
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=758942a516f24150e318b3362a64d75c`

        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let weatherTemp = async function (req, res) {
    try {
        let city = req.query.q
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=758942a516f24150e318b3362a64d75c`

        }
        let result = await axios(options)
        res.status(200).send({ temperature: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let weatherTempSorted = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let array = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = await axios.get(`HTTP://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=758942a516f24150e318b3362a64d75c`)
            obj.temp = options.data.main.temp
            array.push(obj)

        }
        let sorted = array.sort(function (a, b) { return a.temp - b.temp })

        res.status(201).send({ data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.weatherTempSorted = weatherTempSorted
module.exports.weatherDetails = weatherDetails
module.exports.weatherTemp=weatherTemp