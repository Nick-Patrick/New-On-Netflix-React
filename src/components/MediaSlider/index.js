import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ImageSlider from 'react-native-image-slider'

const tmdbImageUrl = 'https://image.tmdb.org/t/p'// change this to api request.

class MediaSlider extends Component {
  constructor(props) {
    super(props)
  }

  transformImages(images = []) {
    const imagesList = []
    images.forEach((image) => {
      imagesList.push(tmdbImageUrl + '/w500' + image.file_path)
    })

    return imagesList
  }

  render() {
    const { mediaItems, mediaTitle, mediaTitleStyles, height } = this.props
    const imagesList = this.transformImages(mediaItems)

    return (
      <View>
        { mediaTitle
          ? <Text style={mediaTitleStyles}>{mediaTitle}</Text>
          : null
        }
        <ImageSlider height={height} images={imagesList} />
      </View>
    )
  }
}

export default MediaSlider