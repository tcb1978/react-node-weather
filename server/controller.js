require('dotenv').config();
const axios = require('axios');

//process.env.WEATHER_API_KEY

module.exports = {

    onCitySearch(req, res) {
        const { city } = req.body
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            console.log(response.data);
            res.json(response.data);
        }).catch((err) => console.log(err))
    },
    
    onZipSearch(req, res) {
        const { zip } = req.params
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            console.log(response.data);
            res.json(response.data);
        }).catch((err) => console.log(err))
    }
    ///make my external api axios calls from the controller
    //9. external web API, per endpoint used 
};


