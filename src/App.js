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

  // const buttonmatrix = [
  //   [{label: "AC", handler: "clear"}, {label: "DEL", handler: "del"}, {label: "(", handler: "update"}, {label: ")", handler: "update"}],
  //   [{label: "1", handler: "update"}, {label: "2", handler: "update"}, {label: "3", handler: "update"}, {label: "+", handler: "update"}],
  //   [{label: "4", handler: "update"}, {label: "5", handler: "update"}, {label: "6", handler: "update"}, {label: "-", handler: "update"}],
  //   [{label: "7", handler: "update"}, {label: "8", handler: "update"}, {label: "9", handler: "update"}, {label: "*", handler: "update"}],
  //   [{label: "0", handler: "update"}, {label: ".", handler: "update"}, {label: "=", handler: "eval"}, {label: "/", handler: "update"}],
  // ];

    return (
      <div className="App">
        <PocketCalculator
          buttonmatrix={buttonmatrix}
          mode="js-eval"
        />
      </div>
    );
  }
}

export default App;
