import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { createDrawerNavigator, createAppContainer } from 'react-navigation'


import HomeScreen from './src/Screens/HomeScreen'
import SettingsScreen from './src/Screens/SettingsScreen'
import AvatarIcon from './src/components/AvatarIcon'



export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
})

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
