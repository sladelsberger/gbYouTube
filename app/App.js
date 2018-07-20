import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './reducers/index';
import VideoApp from './components/videoComponent';
import ButtonControl from './components/buttonComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <VideoApp />
          <ButtonControl />
        </View>
      </Provider>
      
    );
  }
}


