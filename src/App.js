import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
<<<<<<< HEAD
      picture: '',
      lat: 33.448377,
      lon: -112.074037,
      city: 'Los Angeles',
      zip: '90066'
    }
  }
//req.params.lat
//req.params.lon
//req.params.city
//req.params.zip
  componentDidMount() {
    axios.get(`http://localhost:3003/api/test/${this.state.lat}/${this.state.long}`)
    .then(response => {
      console.log('cdm');
      console.log(response.data);
    })
  }

  onLatitudeLongitudeSearch() {
    axios.get(`http://localhost:3003/api/test/${this.state.lat}/${this.state.long}`)
      .then(response => {
        console.log('cdm');
        console.log(response.data);
      })
  }

  onCitySearch() {
    axios.get(`http://localhost:3003/api/test/${this.state.city}`)
      .then(response => {
        console.log('city');
        console.log(response.data);
      })
  }

  onZipSearch() {
    axios.get(`http://localhost:3003/api/test/${this.state.zip}`)
      .then(response => {
        console.log('zip');
        console.log(response.data);
      })
=======
      picture: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3535/api/test')
    .then(response => {
      this.setState({
        picture: response.data
      })
    })
>>>>>>> 82454395c0b45fd6fddb94d5806617ff02f344a9
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          Wether App
        </header>
        <section className="App-intro"></section>
        <section>
          <input 
            value = {this.state.lat}
            placeholder = "Latitude"
            onChange = {
                (e) => this.onLatitudeLongitudeSearch(e.target.value)
          }/>
          <input
            value={this.state.lon}
            placeholder="Longitude"
            onChange={
              (e) => this.onLatitudeLongitudeSearch(e.target.value)
            } />
        </section>
=======
          <img src={this.state.picture} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> 82454395c0b45fd6fddb94d5806617ff02f344a9
      </div>
    );
  }
}

export default App;
