import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "cs"
    }
    console.log("constructor")
  }
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }
  shouldComponentUpdate() {
    return true
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  handleClick() {
    this.setState({
      name: this.state.name + 'q'
    })
  }
  render() {
    console.log("render")
    return (
      <h1 onClick={() => {this.handleClick()}}>
        hello world {this.state.name}
      </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
