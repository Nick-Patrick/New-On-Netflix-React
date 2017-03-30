import React, { Component } from 'react';
import styles from './styles.js'
import { TabNavigator, NavigationActions } from 'react-navigation';
import {
  StatusBar,
  View,
  Text,
  Button
} from 'react-native';

import * as firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen';

import theme from '../../config/theme.js';

import PreviousMonthScreen from '../PreviousMonthScreen';
import CurrentMonthScreen from '../CurrentMonthScreen';
import NextMonthScreen from '../NextMonthScreen';

const firebaseConfig = {
  apiKey: "AIzaSyAA4BsLduX1c0wnXN_N7RWXrIQD24VoMVA",
  authDomain: "netflixtitles.firebaseapp.com",
  databaseURL: "https://netflixtitles.firebaseio.com",
  storageBucket: "netflixtitles.appspot.com",
  messagingSenderId: "82622357232"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const navigateAction = NavigationActions.navigate({
  routeName: 'currentMonth',
  params: {},
  action: NavigationActions.navigate({ routeName: 'CurrentMonthScreen'})
})

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseItems: [{}]
    };

    firebaseApp.auth().signInAnonymously().catch(function(error) {
      console.log('failed firebase', error);
    });

    this.itemsRef = firebaseApp.database().ref('netflix/months');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    this.itemsRef.on('value', snapshot => {
      this.setState({firebaseItems: snapshot.val()});
    });

    if (SplashScreen) SplashScreen.hide();
  }

  componentWillReceiveProps(props) {
    this.itemsRef.on('value', snapshot => {
      this.setState({firebaseItems: snapshot.val()});
    });
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
  initialRouteName: 'currentMonth',
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
