import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

import * as Actions from '../actions/videoAction'

class ButtonControl extends Component {
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
    console.log(this.props, 'button props....');
    return (
      <ScrollView>
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.setState(s => ({ isPlaying: !s.isPlaying }))}
          >
            <Text style={styles.buttonText}> 
              {this.props.status == 'playing' ? 'Pause' : 'Play'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.setState(s => ({ isLooping: !s.isLooping }))}
          >
            <Text style={styles.buttonText}>
              {this.props.isLooping ? 'Looping' : 'Not Looping'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Rewind </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Fast Forward </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
});

// connect to the store

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
export default connect(mapStateToProps, mapDispatchToProps)(ButtonControl);
