import React, { Component } from 'react';
import {
  Text,
  ListView
} from 'react-native';

import styles from './styles.js';
import Day from '../../components/Day'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2,) => r1 !== r2 });

class MonthScreen extends Component {

  constructor(props) {
    super(props);
    this.days = [];

    this.state = {
      daysDataSource: ds.cloneWithRows([{}])
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
    const month = props.days;
    if (!month || !month.days) return;

    month.days.forEach((day) => {
      this.days.push(day);
    });

    this.setState({
      daysDataSource: ds.cloneWithRows(this.days)
    });
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.daysDataSource}
        renderHeader={(rowData) => <Text style={styles.dayHeader}>{this.props.month} {this.state.daysDataSource.day}</Text>}
        renderRow={(rowData) => <Day month={this.props.month} day={rowData} />}
      />
    );

  }
}

module.exports = MonthScreen;
