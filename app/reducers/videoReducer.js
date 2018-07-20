import * as types from '../actions/actionTypes';

const videoInitialState = {
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
};

export default videoReducer = (state = videoInitialState, action) => {
  switch (action.type) {
    case types.PLAY_VIDEO:
      return state;

    case types.PAUSE_VIDEO:
      return state;

    case types.FORWARD_VIDEO:
      return state;

    case types.REWIND_VIDEO:
      return state;

    default:
      return state;
  }
};
