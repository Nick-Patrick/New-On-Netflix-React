import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './routes/HomeScreen';

import {
  AppRegistry
} from 'react-native';

const NewOnNetflix = StackNavigator({
  Home: { screen: HomeScreen }
});

module.exports = NewOnNetflix;
