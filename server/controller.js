require('dotenv').config();
const axios = require('axios');

//process.env.WEATHER_API_KEY

const city_assets = [];

module.exports = {
    
    onCitySearch(req, res) {
        const { city } = req.body
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            //push into city_assets array UPDATE
            city_assets.push({city: response.data.main})
            console.log(city_assets);
            res.json(response.data);
        }).catch((err) => console.log(err))
    },

    onDeleteCity(req, res) {
        const { city } = req.params
        city_assets.map((e, i) => {
            if (e.city) {
                //Remove from city assets array DELETE
                city_assets.splice(i, 1)
                console.log(city_assets);
            }
        })
    },

    onZipSearch(req, res) {
        const { zip } = req.params
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.WEATHER_API_KEY}`).then(response => {
            // console.log(response.data);
            res.json(response.data);
        }).catch((err) => console.log(err))
    },

    onDeleteZip(req, res) {
        const { zip } = req.body
        city_assets.map((e, i) => {
            if (e.city) {
                //Remove from city assets array DELETE
                city_assets.splice(i, 1)
                console.log(city_assets);
            }
        })
    },

};