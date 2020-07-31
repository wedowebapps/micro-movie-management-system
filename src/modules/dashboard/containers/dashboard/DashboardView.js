import React, { Component } from 'react'

export class DashboardView extends Component {
  
  static propTypes = {

  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.onButtonPress() }>DEMO </div>

        {this.props.isLoading && <h1>LOADING</h1>}
      </div>
    )
  }
}

export default DashboardView
