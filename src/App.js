import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      zip: 0,
      lon: 0,
      lat: 0,
      assets: [],
      display_city: ''
    }
    this.onCitySearch = this.onCitySearch.bind(this);
    this.onZipSearch = this.onZipSearch.bind(this)
  }

  onCitySearch(value) {
    let assets = this.state.assets
    axios.post(`http://localhost:3003/api/city`, {city: this.state.city})
      .then(response => {
        this.setState({
          assets: response.data.main,
          display_city: this.state.city,
          city: ''
        })
      })
  }

  handleCity(str) {
    this.setState({
      city: str
    })
  }

  onZipSearch(val) {
    axios.get(`http://localhost:3003/api/zip/${this.state.zip}`)
      .then(response => {
        console.log(response.data.main);
        this.setState({
          // zip: reponse.state.
        })
      })
  }

  render() {

    const cityToDisplay = this.state.display_city.toUpperCase();
  
    return (
      <div className="App">
        <header className="App-header">
          Wether App
        </header>
        <section className="App-intro"></section>
        <section className="City">
          <input
            className="city-input"
            value={this.state.city}
            placeholder="city"
            onChange={(e) => {this.handleCity(e.target.value)}}/>
          <button onClick={this.onCitySearch}>City</button>
        </section>
        <section className="city-display"><h2>{ cityToDisplay }</h2></section>
      </div>
    );
  }
}

export default App;
