import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AvatarIcon from '../components/AvatarIcon'
import { Header, Left, Right, Icon, } from 'native-base'


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
              />
          </Left>
          <Right></Right>
        </Header>
        <View style={styles.iconContainer}>
          <AvatarIcon/>
        </View>
        <View style={styles.tipContainer}></View>
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
    backgroundColor: '#c2c2c2',
  },
});
