import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import TitleDetails from '../components/TitleDetails'
import * as movieActions from '../actions/movies'
import { NavStyles } from '../constants/Config'
import AdHelper from '../utils/AdHelper'
import BannerAd from '../components/BannerAd'

class TitleDetailsContainer extends Component {
  static navigatorStyle = NavStyles

  constructor(props) {
    super(props)
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch(event.id) {
      case 'willAppear':
        AdHelper.loadInterstitial()
      break
    }
  }

  componentDidMount() {
    const { dispatch, data } = this.props
    const movie = data
    
    dispatch(movieActions.fetchMovieDetails(movie, movie.type))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TitleDetails style={{flex: 1}} {...this.props} />
        <BannerAd/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { movieDetails } = state

  return {
    movieDetails
  }
}

export default connect(mapStateToProps)(TitleDetailsContainer)