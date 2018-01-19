import React, { Component } from 'react';
import logo from './logo.svg';
import PocketCalculator from './pocket_calculator_components/PocketCalculator.js'
import './App.css';

class App extends Component {
  render() {

    const buttonmatrix = [
      ["AC" , "DEL" , "(" , ")"],
      ["1"  , "2"   , "3" , "+"],
      ["4"  , "5"   , "6" , "-"],
      ["7"  , "8"   , "9" , "*"],
      ["0"  , "."   , "=" , "/"],
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PocketCalculator buttonmatrix = {buttonmatrix}/>
      </div>
    );
  }
}

export default App;
