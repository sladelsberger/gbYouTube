import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './reducers/index';
import VideoApp from './components/videoComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <VideoApp />
      </Provider>
      
    );
  }
}


