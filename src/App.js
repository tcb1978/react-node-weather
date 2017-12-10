import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Weather from "./Weather";


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
      displayZipComponent: false

    }
    this.onCitySearch = this.onCitySearch.bind(this);
    this.onZipSearch = this.onZipSearch.bind(this)
  }

  onCitySearch(value) {
    axios.post(`http://localhost:3003/api/city`, {city: this.state.city})
      .then(response => {
        console.log(response.data);
        this.setState({
          assets: response.data.main,
          display_city: this.state.city,
          displayCityComponent: true,
          displayZipComponent: false
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
          {this.state.displayCityComponent && <Weather city={this.state.assets} />}
          {this.state.displayZipComponent && <Weather city={this.state.zipInfo} />}
        </div>
      </div>
    );
  }
}

export default App;
