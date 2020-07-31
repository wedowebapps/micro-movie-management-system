import React, { Component } from "react";
import { connect } from "react-redux";
import ListView from "./ListView";
import * as listActions from "../../actions";

export class ListContainer extends Component {
  render() {
    return <ListView {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  myList: state.list.myList,
  myWatchedList: state.list.myWatchedList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMyListMovies: (data) => dispatch(listActions.setMyListMovies({ data })),
    setMyWatchedMovies: (data) =>
      dispatch(listActions.setMyWatchedMovies({ data })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
