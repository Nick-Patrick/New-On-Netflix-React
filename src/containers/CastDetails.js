import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import * as castActions from '../actions/cast'
import CastDetails from '../components/CastDetails'
import { NavStyles } from '../constants/Config'
import BannerAd from '../components/BannerAd'
import AdHelper from '../utils/AdHelper'

class CastDetailsContainer extends Component {
  static navigatorStyle = NavStyles

  constructor(props) {
    super(props)
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch(event.id) {
      case 'willAppear':
        AdHelper.loadInterstitial()

        const { dispatch, data } = this.props
        const cast = data
        dispatch(castActions.fetchCastDetails(cast))
      break
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CastDetails style={{ flex: 1 }} {...this.props} />
        <BannerAd />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { castDetails } = state
  return {
    castDetails
  }
}

export default connect(mapStateToProps)(CastDetailsContainer)