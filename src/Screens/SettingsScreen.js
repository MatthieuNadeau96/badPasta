import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Header, Left, Body, Right, Icon, } from 'native-base'

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: '#FE8E46'}}
          androidStatusBarColor="#df7c3c"
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
          <Text>SettingsScreen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
