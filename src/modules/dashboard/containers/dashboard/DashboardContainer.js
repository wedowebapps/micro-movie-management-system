import React, { Component } from 'react'
import { connect } from 'react-redux'
import DashboardView from './DashboardView'
import * as dashboardActions from '../../actions'

export class DashboardContainer extends Component {

  onButtonPress = () => {
    this.props.fetchDashoard();
  }

  render() {
    return (
      <DashboardView {...this.props} onButtonPress={this.onButtonPress} />
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.dashboard.isLoading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDashoard: () => dispatch(dashboardActions.fetchDashoard()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
