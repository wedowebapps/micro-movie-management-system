import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../App.css";

import { loginUser } from "../../actions";

class Home extends Component {
  componentDidMount() {}

  handleLoginClick = () => {
    this.props.loginUser();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <button onClick={this.handleLoginClick}>Login</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth,
  };
};

export default withRouter(connect(mapStateToProps, { loginUser })(Home));
