import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableHighlight, Linking } from 'react-native'
import styles from './styles'
import TitleDetailsContainer from '../../containers/TitleDetails'
import CastDetailsContainer from '../../containers/CastDetails'
import Spinner from 'react-native-spinkit'
import _ from 'lodash'

const tmdbImageUrl = 'https://image.tmdb.org/t/p/'// change this to api request.

class HorizontalList extends Component {
  constructor(props) {
    super(props)
  }

  keyExtractor = (item) => {
    let { provider } = this.props
    if (provider) {
      if (item.id) return item.id + provider
      if (item.link) return item.link + provider
    }

    if (item.credit_id) return item.credit_id
    return item.id || item.link
  }

  isCastItem(item) {
    const cast = item.item || item

    return Boolean((cast.cast_id || cast.credit_id) && (!cast.original_title && !cast.original_name))
  }

  isMovie(item) {
    const title = item.item || item

    if (title.media_type === 'movie') return true
    if (title.release_year) return true

    return Boolean(title.poster_path && !title.seasons)
  }

  isTvShow(item) {
    const title = item.item || item

    if (title.media_type === 'tv' || title.original_name) return true
    if (title.seasons) return true
    if (title.episode_count) return true

    return false
  }

  transformMovieItem(item) {
    let movieItem = _.get(item, 'item.movie_db[0]', item.item)

    return {
      id: movieItem.id,
      image_path: movieItem.poster_path,
      header: movieItem.title,
      subheader: movieItem.release_date ? movieItem.release_date.substring(0, 4) : '',
      handleOnPress: this.openMovieDetails.bind(this, movieItem)
    }
  }

  transformTVShow(item) {
    let tvItem = _.get(item, 'item.movie_db[0]', item.item)

    return {
      id: tvItem.id,
      image_path: tvItem.poster_path,
      header: tvItem.original_name,
      subheader: tvItem.first_air_date ? tvItem.first_air_date.substring(0, 4) : '',
      handleOnPress: this.openMovieDetails.bind(this, tvItem)
    }
  }

  openMovieDetails(movie) {
    const { navigator } = this.props

    navigator.push({
      screen: 'whatsonnetflix.TitleDetails',
      animated: true,
      title: movie.title || movie.name,
      backButtonTitle: '',
      passProps: {
        data: movie
      },
    })
  }

  transformCastItem(item) {
    const castItem = item.item

    return {
      id: castItem.cast_id,
      image_path: castItem.profile_path,
      header: castItem.name,
      subheader: castItem.character,
      handleOnPress: this.openCastDetails.bind(this, castItem)
    }
  }

  openCastDetails(cast) {
    const { navigator } = this.props

    navigator.push({
      screen: 'whatsonnetflix.CastDetails',
      animated: true,
      component: CastDetailsContainer,
      title: cast.name,
      backButtonTitle: '',
      passProps: {
        data: cast
      },
    })
  }

  transformData(item) {
    if (this.isCastItem(item)) return this.transformCastItem(item)
    if (this.isTvShow(item)) return this.transformTVShow(item)
    if (this.isMovie(item)) return this.transformMovieItem(item)

    return {}
  }

  renderListItem(oldItem = {}) {
    const item = this.transformData(oldItem)
    let sourceProps

    if (!item || !item.image_path || item.image_path.length < 6) return null
    let mainImage = tmdbImageUrl + 'w154' + item.image_path

    if (item.type === 'source') {
      return this.renderSourceListItem(item)
    }

    return (
      <TouchableHighlight
        style={styles.container}
        onPress={item.handleOnPress}>
        <View>
          <Image
            source={{ uri: mainImage }}
            style={styles.image}
           />
          <Text
            numberOfLines={2} style={styles.header}>{ item.header }</Text>
          <Text
            numberOfLines={2} style={styles.subheader}>{ item.subheader }</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { listItems = [], listTitle, listTitleStyles, height, isFetching = false } = this.props

    return (
      <View>
        <Text style={listTitleStyles}>{listTitle}</Text>
         {
          isFetching
            ? (
                <View style={styles.spinner}>
                  <Spinner isVisible={true} size={50} type={'9CubeGrid'} color={'#ffffff'} />
                </View>
              )
            : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={listItems}
                horizontal={true}
                height={height}
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderListItem.bind(this)}
              />
              )
         }
      </View>
    )
  }
}

export default HorizontalList
