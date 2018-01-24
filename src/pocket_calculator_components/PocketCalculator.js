import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      ans: "",
    }
  }

  // Define all sorts of eventHandlers.

  clearExpression = () => {
    this.setState({
      expression: "",
    });
  }

  delExpression = () => {
    const expression = this.state.expression.slice(0,this.state.expression.length-1);
    this.setState({
      expression: expression,
    });
  }

  evalExpression(mode) {  // parametized handler
    return () => {
      // feature request could stack up all previous this.state.ans into some history
      // if so, update history here

      // making case distinction here has one aesthetic disadvantage: handler gets passed with case distinction all way down onto Button component. However, by then it should actually already be decided which mode to use to get the answer!
      // could first make case distinction and based on case return mode-parametized function. But that in turn comes with disadvantage of repeated code, e.g. having three times let ans; this.setState({...}); ...
      // here is one solution:
      const ans = this.getAnswer(mode)(); // promisify!
      this.setState({
        expression: ans,
        ans: ans,
      });

    }
  }

  getAnswer(mode) {
    if (mode === "GET") {
      return () => {
        // toDo
      }
    } else if (mode === "POST") {
      return () => {
        // toDo
      }
    } else if (mode === "js-eval") {
      return () => {
        // return eval(this.state.expression);
      }
    }
  }

  updateExpression(update) {  // parametized handler. We create many handlers though ... could also create just one handler but then buttonmatrix seems to be hardly scalable ...
    return () => {
      const expression = this.state.expression + update;
      this.setState({
        expression: expression,
      });
    }
  }

  // how to code this more intuitive?
  buttonmatrix = this.props.buttonmatrix.map((buttonrow, row) => {
    return buttonrow.map((label, col) => {
      let handler;
      if (label === 'AC') {
        handler = this.clearExpression;
      } else if (label === 'DEL') {
        handler = this.delExpression;
      } else if (label === '=') {
        handler = this.evalExpression(this.props.mode);
      } else {
        handler = this.updateExpression(label);
      }
      return {label: label, handler: handler};
    });
  });

  // buttonmatrix = [
  //   [{label: "AC", handler: this.clearExpression}, {label: "DEL", handler: this.delExpression}, {label: "(", handler: this.updateExpression("(")}, {label: ")", handler: this.updateExpression(")")}],
  //   [{label: "1", handler: this.updateExpression("1")}, {label: "2", handler: this.updateExpression("2")}, {label: "3", handler: this.updateExpression("3")}, {label: "+", handler: this.updateExpression("+")}],
  //   [{label: "4", handler: this.updateExpression("4")}, {label: "5", handler: this.updateExpression("5")}, {label: "6", handler: this.updateExpression("6")}, {label: "-", handler: this.updateExpression("-")}],
  //   [{label: "7", handler: this.updateExpression("7")}, {label: "8", handler: this.updateExpression("8")}, {label: "9", handler: this.updateExpression("9")}, {label: "*", handler: this.updateExpression("*")}],
  //   [{label: "0", handler: this.updateExpression("0")}, {label: ".", handler: this.updateExpression(".")}, {label: "=", handler: this.evalExpression(this.props.mode)}, {label: "/", handler: this.updateExpression("/")}],
  // ];


  render() {
    return (
      <div>
        <Display expression={this.state.expression}/>
        <Buttonmatrix buttonmatrix={this.buttonmatrix}/>
      </div>
    );

  }
}

export default PocketCalculator;
