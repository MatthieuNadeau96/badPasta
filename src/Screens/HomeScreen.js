import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AvatarIcon from '../components/AvatarIcon'
import { Header, Left, Body, Right, Icon, } from 'native-base'


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: '#97ed9e'}}
          androidStatusBarColor="#89d98f"
          >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
              style={{fontSize: 34}}
              />
          </Left>
          <Body></Body>
          <Right></Right>
        </Header>
        <View style={styles.iconContainer}>
          <AvatarIcon/>
        </View>
        <View style={styles.tipContainer}>
          <Text style={styles.tipTitle}>TIP: </Text>
          <Text style={styles.tipText}>
            Proin commodo congue tempus. Donec dapibus, odio quis dapibus volutpat, elit erat suscipit libero, et tempor lacus mauris id nisi. Maecenas lorem arcu, tristique id feugiat fermentum, tincidunt ut ligula. Nam sapien libero, tincidunt vitae tellus at, posuere vehicula ex. Vivamus in lectus ex. Phasellus imperdiet ut ex ac tempus. Ut at fringilla massa. Mauris vitae tempus leo.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flex: 3,
    backgroundColor: '#9a9a9a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipContainer: {
    flex: 5,
    padding: 15,
    backgroundColor: '#c2c2c2',
  },
  tipTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 20,
  }
});
