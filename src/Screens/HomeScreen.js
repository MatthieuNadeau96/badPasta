import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AvatarIcon from '../components/AvatarIcon'
import { Header, Left, Body, Right, Icon, } from 'native-base'


export default class HomeScreen extends Component {
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
        <ScrollView>
          <View style={styles.iconContainer}>
            <AvatarIcon/>
          </View>
          <View style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Tip: </Text>
            <Text style={styles.tipText}>
              Proin commodo congue tempus. Donec dapibus, odio quis dapibus volutpat, elit erat suscipit libero, et tempor lacus mauris id nisi. Maecenas lorem arcu, tristique id feugiat fermentum, tincidunt ut ligula.
            </Text>
          </View>
          <View style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Tip: </Text>
            <Text style={styles.tipText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec risus vel odio fringilla tempus vel sed erat. Quisque maximus purus sit amet fermentum egestas. Suspendisse tempus sagittis enim sed suscipit. Sed mollis magna et dolor feugiat, vel rutrum arcu pretium. Vestibulum vestibulum urna viverra tempor faucibus. Donec tristique justo in orci pretium hendrerit. Nulla viverra velit vel lacus iaculis, nec pulvinar nunc fermentum. Pellentesque posuere lorem sit amet nisi ornare, vel pulvinar risus condimentum. Mauris porta eros vitae velit tincidunt venenatis. Nam eget viverra neque, et faucibus purus. Quisque ultrices aliquet tortor id efficitur. Nunc varius dapibus massa, id blandit libero consectetur a. Integer vel gravida mauris. Vivamus consequat varius est, a bibendum ante sodales ut. Mauris malesuada odio a mauris consectetur porta.
            </Text>
          </View>
        </ScrollView>
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
    paddingVertical: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipContainer: {
    flex: 2,
    alignItems: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  tipTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#424242',
  },
  tipText: {
    fontSize: 18,
    color: '#424242',
  }
});
