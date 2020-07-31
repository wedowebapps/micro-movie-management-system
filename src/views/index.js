import React, { Component } from "react";
import Home from './home';
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (this.props.user.user) ? <Redirect to="/dashboard" /> : <Home />
  }
}

const mapStateToProps = ({ auth }) => {    
  return {
    user : auth
  };
};

export default withRouter( connect( mapStateToProps, {} )(Main) );
