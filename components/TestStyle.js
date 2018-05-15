import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TestStyle extends Component {
  render() {
    return(
      <View style = { styles.container }>
        <Text style = { styles.firstText }> Hello </Text>
        <Text style = { styles.secondText }> World </Text>
        <Text style = { styles.firstText, styles.secondText }> Hello, World </Text>
        <Text style = { styles.secondText, styles.firstText }> Hello, World </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    marginTop : 20,
    marginLeft : 10,
    marginRight : 10,
    backgroundColor : '#28B463',
    borderWidth : 2,
    borderColor : '#1F618D',
  },

  firstText : {
    margin : 5,
    color : 'white',
  },

  secondText : {
    margin : 5,
    color : 'yellow',
    fontSize : 20,
    fontWeight : 'bold',
  }
});
