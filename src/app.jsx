import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class ComponentA extends React.Component {
  render() {
    return (
      <div>
        componentA
        <Switch>
          <Route
            exact
            path={`${this.props.match.path}`}
            render={() => {
              return <div>当前是不带参数的A</div>;
            }}
          />
          <Route
            path={`${this.props.match.path}/:id`}
            render={route => {
              return <div>当前是带参数的A, 参数是{route.match.params.id}</div>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

class ComponentB extends React.Component {
  render() {
    return <p>componentB</p>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

ReactDOM.render(
  <Router>
    <App>
      <div>
        <Link to="/a">组件a</Link>
        <br />
        <Link to="/a/123">带参数的组件a</Link>
        <br />
        <Link to="/b">组件b</Link>
      </div>
      <Route path="/a" component={ComponentA} />
      <Route path="/b" component={ComponentB} />
    </App>
  </Router>,
  document.getElementById("app")
);
