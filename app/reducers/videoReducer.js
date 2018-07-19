import * as types from '../actions/actionTypes';

const videoInitialState = {
  videoPlaying: false,
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
