import React, { Component } from "react";
import { connect } from "react-redux";
import ListView from "./ListView";

export class ListContainer extends Component {
  render() {
    return <ListView {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  myList: state.list.myList,
  myWatchedList: state.list.myWatchedList,
});

export default connect(mapStateToProps)(ListContainer);
