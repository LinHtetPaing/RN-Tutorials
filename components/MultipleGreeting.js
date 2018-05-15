import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render(){
    return(
      <Text>Hello  { this.props.name } </Text>
    );
  }
}

export default class MultipleGreeting extends Component {
  render(){
    return(
      <View style = {{ alignItems: 'center' }}>
        <Greeting name = "Zwe Mun htun"></Greeting>
        <Greeting name = "Zwe"></Greeting>
        <Greeting name = "Mun"></Greeting>
        <Greeting name = "htun"></Greeting>

      </View>
    );
  }
}
