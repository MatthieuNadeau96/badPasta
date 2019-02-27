import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AvatarIcon from './src/components/AvatarIcon'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#e1fbf1',
  },
});
