import React, { Component } from 'react';
import dateHelper from '../../lib/dateHelper';
import FirebaseHelper from '../../lib/FirebaseHelper.js';

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

  componentDidMount() {
    if (!this.state.days || this.state.days.length < 2) {
      this.itemsRef = FirebaseHelper.getItemsRef();
      this.itemsRef.once('value', snapshot => {
        this.setState({days: snapshot.val()[dateHelper.getNextMonthYear().toLowerCase()]});
      });
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
