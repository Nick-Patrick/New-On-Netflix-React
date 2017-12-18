import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import NewTitlesComponent from '../components/Main'
import { fetchNewIfNeeded } from '../actions/movies'
import { NavStyles } from '../constants/Config'
import Icon from 'react-native-vector-icons/FontAwesome'
import BannerAd from '../components/BannerAd'

class NewTitles extends Component {
  static navigatorStyle = NavStyles

  constructor(props) {
    super(props)

    const { dispatch } = this.props
    dispatch(fetchNewIfNeeded({}))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NewTitlesComponent style={{flex: 1}} {...this.props} />
        <BannerAd />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { newTitles } = state

  return {
    newTitles
  }
}

export default connect(mapStateToProps)(NewTitles)