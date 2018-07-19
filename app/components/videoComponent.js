import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';

export default class VideoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: 300 }}>
        <WebView 
          style={ styles.WebViewContainer }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/3NhHqPA8nIs'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
  }
});
