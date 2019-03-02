import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class AvatarIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/pasta.png')}
          style={{height: 120, width: 120, borderRadius: 60}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // test sizes with other devices
  container: {
    height: 150,
    width: 150,
    backgroundColor: '#fef5ec',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
  },
});
