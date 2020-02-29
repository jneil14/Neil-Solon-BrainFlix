import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";
import Home from "./components/Home";

class App extends Component {
 
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={routerProps => {
              return <Home routerProps={routerProps} />;
            }}
            exact
          />
          {/* just component <Home /> */}
          <Route path="/upload" component={Upload} />
          <Route
            path="/video/:id"
            render={routerProps => {
              return <Home routerProps={routerProps} />;
            }}
          />
          {/* just component <Home /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

