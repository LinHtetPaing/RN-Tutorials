import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    var taskToDo =() => {
      this.setState(previousState => {
        return{
          showText: !previousState.showText
        };
      });
    };

    const timeToBlink = 1000;
    setInterval(taskToDo, timeToBlink);

  }

  render(){
    let textToDisplay = this.state.showText ? this.props.inputText : ' ';
    return(
      <Text>{textToDisplay}</Text>
    );
  }
}

export default class BlinkText extends Component {
  render() {
    return(
      <View>
        <Blink inputText = 'Hello How are you'></Blink>
        <Blink inputText = 'I am fine'></Blink>
      </View>
    );
  }
}
