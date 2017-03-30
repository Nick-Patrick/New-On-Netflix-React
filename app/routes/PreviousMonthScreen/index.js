import React, { Component } from 'react';
import dateHelper from '../../lib/dateHelper';
import {View} from 'react-native';
import MonthScreen from '../MonthScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../config/theme.js'
import FirebaseHelper from '../../lib/FirebaseHelper.js';
const month = dateHelper.getPreviousMonth();

class PreviousMonthScreen extends Component {

  static navigationOptions = {
    title: month.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      days: [],
      spinnerVisible: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const { navigate } = this.props.navigation;
      navigate('currentMonth');
      this.setState({spinnerVisible: false});

      if (!this.state.days || this.state.days.length < 2) {
        this.itemsRef = FirebaseHelper.getItemsRef();
        this.itemsRef.once('value', snapshot => {
          this.setState({days: snapshot.val()[dateHelper.getPreviousMonthYear().toLowerCase()]});
        });
      }
    }, 4000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps(props) {
   this.setState({days: props.screenProps[dateHelper.getPreviousMonthYear().toLowerCase()]});
  }

  render() {
    return (
      <View>
        <Spinner visible={this.state.spinnerVisible} textContent={"Searching Netflix Titles..."} overlayColor="rgba(193, 0, 13, 0.01)" size='large' color={theme.colors.primary} textStyle={{fontSize: 16, fontFamily: 'AvenirNextCondensed-BoldItalic', color: '#C1000D'}} />
        <MonthScreen month={month} days={this.state.days} />
      </View>
    );
  }
}

module.exports = PreviousMonthScreen;
