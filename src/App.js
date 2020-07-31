import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/containers/dashboard";
import MyList from "./modules/myList/containers/list";

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
          <Route exact path="/my-list" component={MyList} />
        </Router>
      </div>
    );
  }
}

export default App;
