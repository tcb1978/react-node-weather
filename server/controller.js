require('dotenv').config();
const axios = require('axios');

//process.env.WEATHER_API_KEY

module.exports = {
    test(req, res){
        const {lat, lon} = req.params
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            console.log(response.data);
            res.json(response.data);
        })
    },
    latitudeLongitude(req, res) {
        const { city } = req.params
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            console.log(response.data);
            res.json(response.data);
        })
    },
    get(req, res) {
        const { zip } = req.params
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            console.log(response.data);
            res.json(response.data);
        })
    }
    ///make my external api axios calls from the controller

    //9. external web API, per endpoint used 
};


