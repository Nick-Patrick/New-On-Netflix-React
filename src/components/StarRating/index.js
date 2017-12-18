import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, ScrollView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../../constants/Theme'

class StarRating extends Component {
  constructor(props) {
    super(props)

    this._renderStars = this._renderStars.bind(this)
  }

  _renderStar(key) {
    const { color } = this.props

    return (
      <Icon key={key} name="star" size={20} color={color || Theme.colors.primary} />
    )
  }

  _renderStars() {
    let i = 0
    let stars = []
    while(i <= (this.props.stars / 2)) {
      stars.push(this._renderStar(i))
      i++
    }

    return stars
  }

  render() {
    return (
      <Text>
        { this._renderStars() }
      </Text>
    )
  }
}

module.exports = StarRating