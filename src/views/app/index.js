import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";


class Dashboard extends Component {

  render() {
    return (
      <div>Hello</div>
    );
  }
}

const mapStateToProps = ({ auth }) => {    
  return {
    user : auth
  };
};

export default withRouter( connect( mapStateToProps, {} )(Dashboard) );