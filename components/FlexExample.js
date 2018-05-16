import React , { Component } from 'react';
import { View , Text } from 'react-native';

export default class  FlexExample extends Component {
  render() {
    return(
      <View style = {{
        backgroundColor: 'aquamarine',
        height: 500,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Text style = {{ width: 50, height: 50, backgroundColor: 'red'}}/>
      <Text style = {{ width: 50, height: 50, backgroundColor: 'green'}}/>
      <Text style = {{ width: 50, height: 50, backgroundColor: 'blue'}}/>
      </View>
    );
  }
}
