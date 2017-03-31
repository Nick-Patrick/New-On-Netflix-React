import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import _ from 'lodash';

import {
  AdMobInterstitial
} from 'react-native-admob';


import styles from './styles.js';
import TitleListItem from '../TitleListItem';

const titlesPressed = 0

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: props.day
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
    this.setState({
      day: props.day
    });
  }

  handleOnPress() {
    titlesPressed = titlesPressed + 1;
    if (titlesPressed === 2 || (titlesPressed % 6) === 0) {
      AdMobInterstitial.isReady((isReady) => {
        if (isReady) {
          AdMobInterstitial.showAd(() => {});
        } else {
          AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd(() => {}));
        }
      });
    }
  }

  render() {
    const day = this.state.day || [];
    const titles = _.values(day).map((title, index) => {
      return (<TitleListItem handleOnPress={this.handleOnPress} key={index} title={title} />);
    });

    return (
      <View>
        {titles}
      </View>
    );
  }
}

module.exports = Day;
