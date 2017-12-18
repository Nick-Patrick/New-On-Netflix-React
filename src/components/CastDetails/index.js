import React, { Component } from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableHighlight, Linking } from 'react-native'
import styles from './styles'
import HorizontalList from '../HorizontalList'
import Loading from '../Loading'
import MediaSlider from '../MediaSlider'
import Theme from '../../constants/Theme'
import Dimensions from 'Dimensions'
import TitleDetailsContainer from '../../containers/TitleDetails'

const tmdbImageUrl = 'https://image.tmdb.org/t/p/'// change this to api request.

class CastDetails extends Component {
  constructor(props) {
    super(props)
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Loading loadingText='Searching Cast' />
      </View>
    )
  }

  renderCast(cast = {}) {

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        { cast.images && cast.images.profiles && cast.images.profiles.length > 1
          ? this.renderImageSlider(cast.images.profiles)
          : null
        }
        <View style={styles.infoContainer}>
          { this.renderTitle(cast) }
          { this.renderDescription(cast) }

          { cast.movie_credits && cast.movie_credits.cast && cast.movie_credits.cast.length > 4
            ? this.renderHorizontalList('Top Movies Starring ' + cast.name, cast.movie_credits.cast)
            : null
          }

          { cast.tv_credits && cast.tv_credits.cast && cast.tv_credits.cast.length > 4
            ? this.renderHorizontalList('Top TV Shows Starring ' + cast.name, cast.tv_credits.cast)
            : null
          }

        </View>
        <View style={{height: 100}}/>
      </ScrollView>
    )
  }

  renderTitle(cast) {
    return (<Text style={[styles.mainText, styles.title]}>{cast.name}</Text>)
  }

  renderDescription(cast) {
    return (<Text style={[styles.mainText, styles.description]}>{cast.biography}</Text>)
  }

  renderHorizontalList(listTitle = "", items = []) {
    const { navigator } = this.props

    return (
      <HorizontalList
        listTitle={listTitle}
        listTitleStyles={[styles.mainText, styles.miniHeader, styles.paddingTop]}
        listItems={items}
        navigator={navigator} />
    )
  }

  renderImageSlider(images = [], listTitle = "") {
    return (
      <MediaSlider
        height={Dimensions.get('window').width * 0.862}
        mediaItems={images.slice(1, 10)} />
    )
  }

  render() {
    const { castDetails } = this.props

    return (
      <View>
        { castDetails.isFetching
          ? this.renderLoading()
          : this.renderCast(castDetails.item[castDetails.item.length - 1])
        }
      </View>
    )
  }
}

export default CastDetails