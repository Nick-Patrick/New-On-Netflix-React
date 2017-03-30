import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import styles from './styles.js';

class TitleListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.title
    });
  }

  render() {
    const title = this.state.title || {};
    const season = title.Season ? 'Season ' + title.Season  + '  -  ' : '';
    const poster = (title.Poster && title.Poster.length > 5) ? title.Poster : 'https://streamsidekick.com/wp-content/uploads/2017/02/netflix-movie-2-placeholder.png';
    if (!title.Title) return null;

    return (
      <TouchableHighlight>
        <View style={styles.listItem}>
          <Image
            style={styles.thumbnail}
            source={{ uri: poster }}
          />
          <View style={styles.listItemDescription}>
            <Text numberOfLines={1} style={styles.title}>{title.Title}</Text>
            <Text style={styles.year}>{ season + (title.Year || '')}</Text>
            <Text style={[styles.runtime, styles.small]}>{title.Runtime}</Text>
            <Text style={[styles.genre, styles.small]}>{title.Genre}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = TitleListItem;
