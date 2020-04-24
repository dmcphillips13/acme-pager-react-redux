import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { loadEmployees } from "./store";
import Employees from "./Employees";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <HashRouter>
        <h1>Hello World</h1>
        <Route component={Employees} />
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadEmployees());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
