import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import { createDrawerNavigator, createAppContainer, DrawerItems, } from 'react-navigation'


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

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{height: 150, backgroundColor: '#fef5ec', alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('./src/assets/images/pasta.png')}
        style={{height: 120, width: 120, borderRadius: 60}}
        />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
  Home: HomeScreen,
  Settings: SettingsScreen
  },
  {
  contentComponent: CustomDrawerComponent
  },
)

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
