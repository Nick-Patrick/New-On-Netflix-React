import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Button,
  Slider
} from 'react-native';

import Modal from 'react-native-modalbox';
import styles from './styles.js';

class TitleListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      isOpen: false
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

  openTitle() {
    this.setState({isOpen: !this.state.isOpen});
    this.props.handleOnPress();
  }

  closeTitle() {
    this.setState({isOpen: false});
  }

  render() {
    const title = this.state.title || {};
    const season = title.Season ? 'Season ' + title.Season  + '  -  ' : '';
    const poster = (title.Poster && title.Poster.length > 5) ? title.Poster : 'https://streamsidekick.com/wp-content/uploads/2017/02/netflix-movie-2-placeholder.png';
    if (!title.Title) return null;

    return (
      <View>
        <TouchableHighlight
          onPress={() => this.openTitle()} >
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

        <Modal
          isOpen={this.state.isOpen}
          style={[styles2.modal, styles2.modal1]}
          ref={"modal1"}
          swipeToClose={false}
          backdrop={false}>
            <Button title="X" onPress={() => this.closeTitle()} />
            <Text style={styles2.text}>{title.Plot.length > 8 ? title.Plot : 'No description available.'}</Text>
            <Text style={styles2.text}>Released: {title.Released.length > 3 ? title.Released : 'Unknown'}</Text>
        </Modal>
      </View>
    );
  }
}

module.exports = TitleListItem;


const styles2 = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  text: {
    color: "black",
    fontSize: 10,
    paddingBottom: 6,
    textAlign: "center"
  }

});
