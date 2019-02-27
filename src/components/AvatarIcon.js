import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AvatarIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pic}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // test sizes with other devices
  container: {
    height: 150,
    width: 150,
    maxHeight: 150,
    minHeight: 80,
    maxWidth: 150,
    minWidth: 80,
    margin: 'auto',
    backgroundColor: '#e37e7b',
    borderRadius: 100,
  },
  pic: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
  },
});
