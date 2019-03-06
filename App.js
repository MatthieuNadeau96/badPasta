import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';

import { createDrawerNavigator, createAppContainer, DrawerItems, } from 'react-navigation'
import firebase from 'react-native-firebase'

import HomeScreen from './src/Screens/HomeScreen'
import SettingsScreen from './src/Screens/SettingsScreen'
import AvatarIcon from './src/components/AvatarIcon'

export default class App extends Component {

  /* == Handling Permissions == */
  async componentDidMount() {
    this.checkPermission();
  }

  async checkPermission  ()  {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('Permission granted');
          this.getToken();
        } else {
          console.log('Permission request');
          this.requestPermission();
        }
      });
    // const enabled = await firebase.messaging().hasPermission();
    // if (enabled) {
    //     this.getToken();
    // } else {
    //     this.requestPermission();
    // }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('before fcmToken: ', fcmToken);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            console.log('after fcmToken: ', fcmToken);
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }

  async requestPermission() {
    // try {
    //     await firebase.messaging().requestPermission();
    //     // User has authorised
    //     this.getToken();
    // } catch (error) {
    //     // User has rejected permissions
    //     console.log('permission rejected');
    // }

    firebase.messaging().requestPermission()
      .then(() => {
        // User has authorised
        console.log('Permission granted in requestPermission');
        this.getToken();
      })
      .catch(error => {
        // User has rejected permissions
        console.log('permission rejected');
      });
  }
  /* ========================== */

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
