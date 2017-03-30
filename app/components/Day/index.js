import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import _ from 'lodash';

import styles from './styles.js';
import TitleListItem from '../TitleListItem';

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

  render() {
    const day = this.state.day || { titles: [] };
    const titles = _.values(day.titles).map((title, index) => {
      return (<TitleListItem key={index} title={title} />);
    });

    return (
      <View>
        <Text style={styles.dayHeader}>{this.props.month} {day.day}</Text>
        {titles}
      </View>
    );
  }
}

module.exports = Day;
