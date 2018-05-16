import React , { Component } from 'react';
import { View , Text, TextInput } from 'react-native';

export default class  TextInputExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      typedText: 'please type your email'
      
    };
  }
  render() {
    return(
      <View>
          <TextInput style= {{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}
          keyboardType = 'email-address'
          placeholder = 'Enter your email'
          placeholderTextColor = 'red'
          onChangeText = {
            (text) => {
              this.setState(
                (previousState) => {
                    return{
                      typedText: text
                    };
                }
              );
            }
          }
          />
          <Text>{ this.state.typedText}</Text>

          <TextInput style= {{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}
          keyboardType = 'email-address'
          placeholder = 'Enter your password'
          placeholderTextColor = 'red'
          secureTextEntry = {true}

          />
      </View>

    );
  }
}
