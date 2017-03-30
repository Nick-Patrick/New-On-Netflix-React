import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './routes/HomeScreen';
import TitleScreen from './routes/TitleScreen';

import {
  AppRegistry
} from 'react-native';

const NewOnNetflix = StackNavigator({
  Home: { screen: HomeScreen },
  Title: { screen: TitleScreen }
});

module.exports = NewOnNetflix;
