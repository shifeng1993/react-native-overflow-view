import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import View from 'react-native-overflow-view';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <View
          style={{
          height: 400,
          width: 300,
          backgroundColor: '#ddd',
          position: 'relative'
        }}>
          <Text style={{
            position:'absolute',
            top: -15
          }}>
            helo
          </Text>
        </View>
      </View>
    );
  }
}