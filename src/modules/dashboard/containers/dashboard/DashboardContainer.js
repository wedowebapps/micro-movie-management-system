import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardView from "./DashboardView";
import * as dashboardActions from "../../actions";

export class DashboardContainer extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return <DashboardView {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.dashboard.isLoading,
  movieList: state.dashboard.movies,
  response: state.dashboard.response,
  totalResults: state.dashboard.totalResults,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(dashboardActions.fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
