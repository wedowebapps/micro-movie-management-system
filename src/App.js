import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views";
// import Dashboard from "./views/app";
import Dashboard from "./modules/dashboard/containers/dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/my-list" component={Main} />
        </Router>
      </div>
    );
  }
}

export default App;
