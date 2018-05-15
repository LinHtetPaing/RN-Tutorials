import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    let greeting = `
    Hello From React Native`;
    return (
      <Text> { greeting }</Text>
    );
  }
}
