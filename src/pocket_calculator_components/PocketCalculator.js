import React from 'react';
import Buttonmatrix from './Buttonmatrix.js';
import Display from './Display.js';

class PocketCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expression: "",
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
      this.getAnswer(mode)();

    }
  }

  getAnswer(mode) {
    if (mode === "GET") {
      return () => {
        const expression = this.state.expression;
        fetch(
          "http://api.mathjs.org/v1/?expr=" + encodeURIComponent(expression)
        ).then((res) => {
          if (res.status !== 200) {
            alert("something went wrong: Error code " + res.status);
            return;
          }
          return res.text();
        }).then((data) => {
          if (data !== "undefined")
          this.setState({
            expression: data,
          });
        });
      }
    } else if (mode === "POST") {
      return () => {
        const expression = this.state.expression;
        fetch(
          "http://api.mathjs.org/v1/", {
            method: "POST",
            body: JSON.stringify({
              expr: expression,
              precision: 10
            }),
            headers: new Headers({
              "Content-Type": "application/json"
            })
          }
        ).then((res) => {
          if (res.status !== 200) {
            alert("something went wrong: Error code " + res.status);
            return;
          }
          return res.json();
        }).then((data) => {
          if (data.result !== "undefined")
          this.setState({
            expression: data.result,
          });
        });
      }
    } else if (mode === "js-eval") {
      return () => {
        const expression = eval(this.state.expression);
        this.setState({
          expression: expression,
        });
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

  // how to code this more intuitively?
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
