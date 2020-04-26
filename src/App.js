import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Employees from "./Employees";
import Nav from "./Nav";

const App = () => {
  return (
    <HashRouter>
      <h1>Acme Pager</h1>
      <Route component={Nav} />
      <Route path="/:page?" component={Employees} />
    </HashRouter>
  );
};

export default connect(null)(App);
