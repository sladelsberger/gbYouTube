// import { connect } from 'react-redux';

import * as types from './actionTypes';

export const playVideo = data => ({
  type: types.PLAY_VIDEO,
  payload: data,
});

export const pauseVideo = data => ({
  type: types.PAUSE_VIDEO,
  payload: data,
});

export const loopVideo = data => ({
  type: types.LOOP_VIDEO,
  payload: data,
});

export const forwardVideo = data => ({
  type: types.FORWARD_VIDEO,
  payload: data,
});

export const rewindVideo = data => ({
  type: types.REWIND_VIDEO,
  payload: data,
});
