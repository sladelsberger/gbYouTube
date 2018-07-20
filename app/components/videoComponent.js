import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, WebView, ScrollView, PixelRatio} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube';

import * as Actions from '../actions/videoAction'

class VideoApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null,
    }
  }

  render() {

    return (
      <ScrollView style={styles.container}
        onLayout={({ nativeEvent: { layout: { width } } }) => {
          if (!this.state.containerMounted) this.setState({ containerMounted: true });
          if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
        }}
      >
        <YouTube
          videoId="3NhHqPA8nIs"
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={1}
          style={[
            { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
            styles.player,
          ]}
          onError={e => this.setState({ error: e.error })}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
          onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}

        />
       
        {/* <WebView 
          style={ styles.WebViewContainer }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/3NhHqPA8nIs'}}
        /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
  },
  container: {
    backgroundColor: 'white',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});

// Connect to the store

mapStateToProps = (state, props) => ({
  isReady: state.videoReducer.isReady,
  status: state.videoReducer.status,
  quality: state.videoReducer.quality,
  error: state.videoReducer.error,
  isPlaying: state.videoReducer.isPlaying,
  isLooping: state.videoReducer.isLooping,
  duration: state.videoReducer.duration,
  currentTime: state.videoReducer.currentTime,
  fullscreen: state.videoReducer.fullscreen,
  containerMounted: state.videoReducer.containerMounted,
  containerWidth: state.videoReducer.containerWidth,
})
mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VideoApp);