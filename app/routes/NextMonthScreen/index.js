import React, { Component } from 'react';
import dateHelper from '../../lib/dateHelper';

import MonthScreen from '../MonthScreen';

const month = dateHelper.getNextMonth();

class NextMonthScreen extends Component {

  static navigationOptions = {
    title: month.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      days: []
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
    this.setState({days: props.screenProps[dateHelper.getNextMonthYear().toLowerCase()]});
  }

  render() {
    return (
      <MonthScreen month={month} days={this.state.days}/>
    );
  }
}

module.exports = NextMonthScreen;
