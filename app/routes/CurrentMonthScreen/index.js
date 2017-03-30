import React, { Component } from 'react';
import dateHelper from '../../lib/dateHelper';
import FirebaseHelper from '../../lib/FirebaseHelper';
import MonthScreen from '../MonthScreen';
import {View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../config/theme.js';
const month = dateHelper.getCurrentMonth();

class CurrentMonthScreen extends Component {

  static navigationOptions = {
    title: month.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      days: [{}],
      spinnerVisible: true
    }
  }

  componentDidMount() {
    if (!this.state.days || this.state.days.length < 2) {
      this.itemsRef = FirebaseHelper.getItemsRef();
      this.itemsRef.once('value', snapshot => {
        this.setState({days: snapshot.val()[dateHelper.getCurrentMonthYear().toLowerCase()]});
        this.setState({spinnerVisible: false});
      });
    } else {
      this.setState({spinnerVisible: false});
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
    this.setState({days: props.screenProps[dateHelper.getCurrentMonthYear().toLowerCase()]});
  }

  render() {
    if (this.state.days.length < 2) return (
      <View>
        <Text style={{padding: 20, marginTop: 50, textAlign: 'center'}}>Please make sure you are connected to the internet.</Text>
        <Text style={{padding: 20, textAlign: 'center'}}>Results will automatically load when found. No need to refresh.</Text>
      </View>
    );
    return (
      <View>
        <Spinner visible={this.state.spinnerVisible} textContent={"Searching Netflix Titles..."} overlayColor="rgba(193, 0, 13, 0.01)" size='large' color={theme.colors.primary} textStyle={{fontSize: 16, fontFamily: 'AvenirNextCondensed-BoldItalic', color: '#C1000D'}} />
        <MonthScreen month={month} days={this.state.days}/>
      </View>
    );
  }

}

module.exports = CurrentMonthScreen;
