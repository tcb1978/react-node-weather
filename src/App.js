import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      lon: 0,
      lat: 0,
      temp: 0,
      assets: []
    }
    this.onCitySearch = this.onCitySearch.bind(this)
  }

  onCitySearch(value) {
    let assets = this.state.assets
    axios.post(`http://localhost:3003/api/city`, {city: this.state.city})
      .then(response => {
        assets.push(response.data.main)
      })
      this.setState({
        assets: assets
      })
      console.log(assets);
  }

  handleCity(str) {
    this.setState({
      city: str
    })
  }

  // onZipSearch() {
  //   axios.get(`http://localhost:3003/api/zip/${this.state.zip}`)
  //     .then(response => {
  //       console.log('zip');
  //       console.log(response.data);
  //     })
  //     this.setState({
    
  //     })
  // }

  render() {

    const cityToDisplay = this.state.city.toUpperCase();

    return (
      <div className="App">
        <header className="App-header">
          Wether App
        </header>
        <section className="App-intro"></section>
        <section className="City">
          <input
            className="city-input"
            // placeholder={this.state.city}
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
