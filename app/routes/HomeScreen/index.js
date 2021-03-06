import React, { Component } from 'react';
import styles from './styles.js'
import { TabNavigator } from 'react-navigation';
import {
  StatusBar,
  View,
  Text,
  Button
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import theme from '../../config/theme.js';
import FirebaseHelper from '../../lib/FirebaseHelper.js';

import PreviousMonthScreen from '../PreviousMonthScreen';
import CurrentMonthScreen from '../CurrentMonthScreen';
import NextMonthScreen from '../NextMonthScreen';

const firebaseApp = FirebaseHelper.getFirebase();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseItems: [{}]
    };

    FirebaseHelper.authFirebase();

    this.itemsRef = FirebaseHelper.getItemsRef();
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    // this.itemsRef.once('value', snapshot => {
    //   this.setState({firebaseItems: snapshot.val()});
    // });

    if (SplashScreen) SplashScreen.hide();
  }

  static navigationOptions = {
    title: 'NEW ON NETFLIX',
    header: {
      tintColor: theme.colors.headerColor,
      style: {
        backgroundColor: theme.colors.primary
      },
      titleStyle: {
        fontFamily: theme.font.headerFont
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <MainScreenTabNavigator screenProps={this.state.firebaseItems}/>
      </View>
    );
  }
}

const tabRoutes = {
  previousMonth: { screen: PreviousMonthScreen },
  currentMonth: { screen: CurrentMonthScreen },
  nextMonth: { screen: NextMonthScreen }
};

const tabSettings = {
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  upperCaseLabel: true,
  initialRouteName: 'previousMonth',
  tabBarOptions: {
    activeTintColor: theme.colors.headerColor,
    inactiveTintColor: theme.colors.navSecondaryColor,
    labelStyle: {
      fontSize: 14,
      fontFamily: theme.font.headerFont
    },
    style: {
      paddingBottom: 14,
      backgroundColor: theme.colors.navColor
    }
  }
};

const MainScreenTabNavigator = TabNavigator(tabRoutes, tabSettings);

module.exports = HomeScreen;
