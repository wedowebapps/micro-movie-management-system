import React, { Component } from "react";

export class DashboardView extends Component {
  render() {
    const { movieList, response, totalResults, isLoading } = this.props;
    return (
      <div>
        <div>{response}</div>
        <div>{totalResults}</div>
      </div>
    );
  }
}

export default DashboardView;
