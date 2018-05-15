import React, { Component } from 'react';
import { Image } from 'react-native';

export default class CatImage extends Component {
  render(){
    const imageSource = { uri: "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5a9acf819140b7602d66bb39/1520095109871/the-emoji-movie-wins-worst-picture-at-38th-razzie-awards-heres-the-full-list-of-winners-or-losers-social.jpg" }
    return (
      <Image source = { imageSource }
      style = {{ width: 300, height: 200 }}></Image>
    );
  }
}
