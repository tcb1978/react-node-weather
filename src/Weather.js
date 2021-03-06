import React, { Component } from 'react';
import { DisplayAsKelvin } from "./Kelvin.js";
import DisplayUpdate from "./DisplayUpdate.js";
import { DeleteCity } from "./DeleteCity.js";
import { UpdateWeather } from "./UpdateWeather.js";
// import './Weather.css';

class Weather extends Component {

    render() {
        // pluck city out of props. Default to an empty object
        const {
            city = {}
        } = this.props;
        // pluck the stuff we want out of city with defaults.
        const {
            temp = 0,
            pressure = 0,
            humidity = 0,
            temp_min = 0,
            temp_max = 0
        } = city;
        return (
            <div>
                <p>Temp: <DisplayAsKelvin temp={temp} /></p>
                <p>Minimum Temp: <DisplayAsKelvin temp={temp_min} /></p>
                <p>Maximum Temp: <DisplayAsKelvin temp={temp_max} /></p>
                <p>Pressure: {pressure} inHg</p>
                <p>Humidity: {humidity}%</p>
                {this.props.displayUpdate ? <DisplayUpdate display={this.props.display}/> : null}
                <DeleteCity onDeleteCity={this.props.onDeleteCity}/>
                <UpdateWeather onUpdateWeather={this.props.onUpdateWeather}/>
            </div>
        )
    }
}

export default Weather;