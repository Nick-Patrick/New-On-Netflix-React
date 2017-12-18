import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'
import TitleDetailsContainer from '../../containers/TitleDetails'
import styles from './styles'
import Theme from '../../constants/Theme'
import _ from 'lodash' 

const tmdbImageUrl = 'https://image.tmdb.org/t/p/'// change this to api request.

class Title extends Component {
  constructor(props) {
    super(props)

    this.throttledPress = _.throttle((movie) => this.handleOnPress(movie), 500, { 'leading': true })
  }

  handleOnPress(movie) {
    const { navigator } = this.props
    
    navigator.push({
      screen: 'newonnetflix.TitleDetails',
      animated: true,
      component: TitleDetailsContainer,
      title: movie.title || movie.name,
      backButtonTitle: '',
      passProps: {
        data: movie
      },
    })
  }

  render() {
    const { movie, tileWidth, noPadding = false, showText = true } = this.props
    
    let mainImage = tmdbImageUrl + 'w154' + movie.poster_path

    if (mainImage.indexOf('undefined') > 0) return null
    let tileHeight
    if (tileWidth) tileHeight = tileWidth * 1.6 
    
    let noPaddingStyles
    if (noPadding) noPaddingStyles = { height: tileHeight || 210, width: tileWidth || 110, padding: 1, margin: 1, marginBottom: 1, shadowOpacity: 0, shadowRadius: 0} // for grid pages

    return (
      <TouchableHighlight
      onPress={ this.throttledPress.bind(this, movie) }
        activeOpacity={0.6}
        style={[styles.titleContainer, noPaddingStyles ]}>
          <View>
            <Image
              source={{ uri: mainImage }}
              style={{ width: tileWidth || 106, height: tileHeight || 152 }}
             />
             { showText 
               ? (
                <View>
                  <Text
                    numberOfLines={1}
                    style={styles.titleText}>{ String(movie.title) }</Text>
                  <Text
                    numberOfLines={1}
                    style={styles.yearText}>{ String(movie.release_year) }</Text>
                </View>
              ) : null
             }
          </View>
      </TouchableHighlight>

    )
  }
}

export default Title