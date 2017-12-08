import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
      super()
      this.state = {

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
      picture: ''
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Wether App
          </header>
        <section className="App-intro"></section>
        <section>
          <input
            value={this.state.lat}
            placeholder="Latitude"
            onChange={
              (e) => this.onLatitudeLongitudeSearch(e.target.value)
            } />
          <input
            value={this.state.lon}
            placeholder="Longitude"
            onChange={
              (e) => this.onLatitudeLongitudeSearch(e.target.value)
            } />
        </section>
      </div>
    );
  }
}

export default App;
