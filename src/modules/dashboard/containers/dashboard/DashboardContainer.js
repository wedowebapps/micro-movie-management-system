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
  listError: state.dashboard.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (filters) =>
      dispatch(dashboardActions.fetchMovies({ filters })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
