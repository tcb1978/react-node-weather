import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Weather from "./Weather";
import UpdateWeather from "./UpdateWeather";
import DisplayUpdate from "./DisplayUpdate";


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      zip: '',
      assets: {},
      display_city: '',
      zipInfo: {},
      displayCityComponent: false,
      displayZipComponent: false,
      weatherUpdate1: '',
      weatherUpdate2: ''

    }
    this.onCitySearch = this.onCitySearch.bind(this);
    this.onZipSearch = this.onZipSearch.bind(this);
    this.onDeleteCity = this.onDeleteCity.bind(this);
    this.onDeleteZip = this.onDeleteZip.bind(this);
    this.onUpdateWeather = this.onUpdateWeather.bind(this);
  }

  onCitySearch(value) {
    axios.post(`http://localhost:3003/api/city`, {city: this.state.city})
      .then(response => {
        console.log(response.data);
        this.setState({
          assets: response.data.main,
          display_city: this.state.city,
          displayCityComponent: true,
          displayZipComponent: false,
          weatherUpdate1: response.data.weather[0].description
        })
        
      })
  }

  onDeleteCity() {
    // axios.delete(`http://localhost:3003/api/city`, { city: this.state.city }).then(response => {
      // console.log(response.data);
      this.setState({
        city: '',
        zip: '',
        assets: '',
        display_city: '',
        displayCityComponent: false,
        displayZipComponent: false
      })
    // })
  }

  onDeleteZip() {
    axios.delete(`http://localhost:3003/api/city`, { city: this.state.city }).then(response => {
    console.log(response.data);
      this.setState({
        city: '',
        zip: '',
        assets: '',
        display_city: '',
        displayCityComponent: false,
        displayZipComponent: false,
        displayUpdate: false
      })
    })
  }

  onUpdateWeather() {
    axios.post(`http://localhost:3003/api/city`, { city: this.state.city }).then(response => {
      console.log(response.data.weather[0].description);
      alert('update clicked!!')
      this.setState({
        weatherUpdate1: response.data.weather[0].description,
        displayUpdate: true
      })
    })
  }

  handleCity(str) {
    this.setState({
      city: str
    })
  }

  onZipSearch() {
    axios.get(`http://localhost:3003/api/zip/${this.state.zip}`)
      .then(response => {
        // console.log(response.data.main);
        this.setState({
          zipInfo: response.data.main,
          city: '',
          display_city: '',
          displayCityComponent: false,
          displayZipComponent: true
        })
      })
  }

  handleZip(val) {
    this.setState({
      zip: val
    })
  }

  render() {

    const cityToDisplay = this.state.city.toUpperCase();
    const zipToDisplay = this.state.zip;
    const display = this.state.weatherUpdate1;
    const displayUpdate = this.state.displayUpdate;
    return (
      <div className="App">

        <header className="App-header">
        <p>Check Weather By City, or Zip</p>
          <div>{cityToDisplay}</div>
          <div>{zipToDisplay}</div>
        </header>

        <section className="App-intro"></section>

        <section className="City input-section">
          <input
            className="city-input form-input"
            value={this.state.city}
            placeholder="city"
            onChange={(e) => { this.handleCity(e.target.value) }} />
          <button className="button" onClick={this.onCitySearch}>City</button>
        </section>

        <section className="Zip input-section">
          <input
            className="zip-input form-input"
            value={this.state.zip}
            placeholder="zip"
            onChange={(e) => { this.handleZip(e.target.value) }} />
          <button className="button" onClick={this.onZipSearch}>Zip</button>
        </section>

        <section className="city-display"><h2 className="header-display">{cityToDisplay}</h2></section>
        <section className="zip-display"><h2 className="header-display">{zipToDisplay}</h2></section>

        <div>
          {this.state.displayCityComponent && 
            <Weather city={this.state.assets} 
            onDeleteCity={this.onDeleteCity} 
            onUpdateWeather={this.onUpdateWeather}
            displayUpdate={displayUpdate}
            display={display}/>}

          {this.state.displayZipComponent && 
            <Weather city={this.state.zipInfo} 
            onDeleteCity={this.onDeleteCity} 
            onUpdateWeather={this.onUpdateWeather}
            displayUpdate={displayUpdate}
            display={display}/>}
        </div>
      </div>
    );
  }
}

export default App;
