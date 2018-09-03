import React, { Component } from 'react';
import logo from './avengers-logo.png';
import './App.css';
import characters from './characterData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: characters
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Michelle Paredes</h1>
        </header>
        {this.state.avengers.map( item => 
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
