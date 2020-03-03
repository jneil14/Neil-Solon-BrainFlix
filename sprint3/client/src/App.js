import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";
import Home from "./components/Home";

class App extends Component {
 
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/upload" component={Upload} />
          
          <Route path="/video/:id" component={Home} />
          
        </Switch>
      </Router>
    );
  }
}

export default App;

