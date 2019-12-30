import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SplashScreen from "./splashScreen";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={SplashScreen} path="/" />
        <Route component={Home} path="/home" />
      </Switch>
    );
  }
}

export default App;
