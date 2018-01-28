import React, { Component } from 'react';
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
        <PocketCalculator
          buttonmatrix={buttonmatrix}
          mode="POST"
        />
        <PocketCalculator
          buttonmatrix={buttonmatrix}
          mode="js-eval"
        />
        <PocketCalculator
          buttonmatrix={buttonmatrix}
          mode="GET"
        />
      </div>
    );
  }
}

export default App;
