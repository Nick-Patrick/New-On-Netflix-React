import React, { Component } from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableHighlight, Linking, Button } from 'react-native'
import styles from './styles'
import HorizontalList from '../HorizontalList'
import Loading from '../Loading'
import MediaSlider from '../MediaSlider'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../../constants/Theme'
import TitleDetailsContainer from '../../containers/TitleDetails'
import Spinner from 'react-native-spinkit'
import StarRating from '../StarRating'

const tmdbImageUrl = 'https://image.tmdb.org/t/p/'// change this to api request.

class TitleDetails extends Component {
  constructor(props) {
    super(props)
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Loading loadingText={ 'Searching' } />
      </View>
    )
  }

  getGenres(genres = []) {
    const genreList = []
    genres.forEach((genre) => genreList.push(genre.name))

    return genreList.join(', ')
  }

  renderMovie(movie = {}) {
    const { dispatch } = this.props

    return (
      <ScrollView           
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        { this.renderMainImage(movie) }
        <View style={styles.infoContainer}>
          { this.renderTitle(movie) }

          <View style={styles.generalInfo}>
            { this.renderGenres(movie) }
            { this.renderRuntime(movie) }
          </View>

          { this.renderDescription(movie) }

          { movie.credits && movie.credits.cast
            ? this.renderHorizontalList('CAST', movie.credits.cast)
            : null
          }

          { movie.images && movie.images.backdrops && movie.images.backdrops.length > 1
            ? this.renderImageSlider('GALLERY', movie.images.backdrops)
            : null
          }

        </View>
        <View style={{height: 60}}></View>
      </ScrollView>
    )
  }

  renderMainImage(movie = {}) {
    const mainImage = tmdbImageUrl + 'w780' + movie.backdrop_path
    return (
      <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
        <Image
          source={{uri: mainImage}}
          style={styles.mainImage}
          resizeMode='contain'/>
        {this.renderVideoLink(movie)}
      </View>
    )
  }

  renderVideoLink(movie = {}) {
    const video = movie.videos && movie.videos.results[0]
    if (!video || !video.key) return null

    const playIcon = (<Icon name="youtube-play" size={60} color={Theme.colors.textPrimary} />)

    return (
      <TouchableHighlight style={styles.videoLink} onPress={this.openVideo.bind(this, video)}>
        {playIcon}
      </TouchableHighlight>
    )
  }

  openVideo(video) {
    Linking.openURL('https://www.youtube.com/watch?v=' + video.key)
  }

  renderTitle(movie = {}) {
    return (
      <View style={styles.titleContainer}>
        <Text style={[styles.mainText, styles.title]}>{movie.title || movie.name}</Text>
        <Text style={[styles.mainText, styles.title, styles.year]}>
        (
          {movie.release_date ?
            String(movie.release_date.substring(0, 4))
              :
            movie.first_air_date ?
              String(movie.first_air_date.substring(0, 4))
              :
              ''
          }
        )
        </Text>
      </View>
    )
  }

  renderGenres(movie = {}) {
    if (!movie.genres) return null

    return (
      <View style={styles.horizontalInfo}>
        <Text style={[styles.mainText, styles.miniHeader]}>{ 'GENRES' }</Text>
        <Text style={[styles.mainText, styles.infoText]}>{this.getGenres(movie.genres)}</Text>
      </View>
    )
  }

  renderRuntime(movie = {}) {
    if (!movie.runtime) return null

    return (
      <View style={styles.horizontalInfo}>
        <Text style={[styles.mainText, styles.miniHeader]}>{ 'RUNTIME' }</Text>
        <Text style={[styles.mainText, styles.infoText]}>{ String(movie.runtime) } { 'mins' }</Text>
      </View>
    )
  }

  renderDescription(movie = {}) {
    if (!movie.overview && !movie.tagline) return null

    return (
      <View>
        {movie.tagline ? (<Text style={[styles.mainText, styles.tagline]}>{ String( movie.tagline) }</Text>) : null }
        {movie.vote_average ? (<View style={styles.stars}><StarRating color={'#E0B127'} stars={movie.vote_average}/></View>) : null }
        <Text style={[styles.mainText, styles.miniHeader]}>{ 'OVERVIEW' }</Text>
        <Text style={[styles.mainText, styles.description]}>{String(movie.overview)}</Text>
      </View>
    )
  }

  renderImageSlider(listTitle = "", images = []) {
    return (
      <MediaSlider
        mediaTitle={listTitle}
        mediaTitleStyles={[styles.mainText, styles.miniHeader, styles.paddingTop]}
        mediaItems={images.slice(1, 10)} />
    )
  }

  renderHorizontalList(listTitle = "", items = [], id) {
    if (!items) return null
    const { navigator } = this.props

    return (
      <HorizontalList
        listTitle={listTitle}
        listTitleStyles={[styles.mainText, styles.miniHeader, styles.paddingTop]}
        listItems={items}
        navigator={navigator} 
        movieId={id}/>
    )
  }

  render() {
    const { navigator, movieDetails } = this.props
    
    return (
      <View>
        { movieDetails.isFetching
          ? this.renderLoading()
          : this.renderMovie(movieDetails.item[movieDetails.item.length - 1])
        }
      </View>
    )
  }
}

export default TitleDetails