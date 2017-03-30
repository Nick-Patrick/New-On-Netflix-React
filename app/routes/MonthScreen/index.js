import React, { Component } from 'react';
import {
  Text,
  ListView
} from 'react-native';

import styles from './styles.js';
import Day from '../../components/Day'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2,) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

class MonthScreen extends Component {

  constructor(props) {
    super(props);
    this.days = [];

    this.state = {
      daysDataSource: ds.cloneWithRowsAndSections([{}])
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
      daysDataSource: ds.cloneWithRowsAndSections(this.days)
    });
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.daysDataSource}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={(sectionData) => <Text style={styles.dayHeader}>{this.props.month} {sectionData.day}</Text>}
        renderRow={(sectionData) => <Day day={sectionData} />}
      />
    );

  }
}

module.exports = MonthScreen;
