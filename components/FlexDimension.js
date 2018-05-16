import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component{
  render() {
    return(
      <View style = {{ flex: 1}}>
         <View style = {{ flex: 30, backgroundColor: 'mediumaquamarine'}} />
         <View style = {{ flex: 30, backgroundColor: '#fff'}} />
         <View style = {{ flex: 40, backgroundColor: 'darkslategrey' }} />
      </View>
    );
  }
}
