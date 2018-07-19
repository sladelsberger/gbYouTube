import { combineReducers, createStore } from 'redux';

import videoReducer from './videoReducer';

const AppReducers = combineReducers({
  videoReducer,
});

const rootReducer = (state, action) => AppReducers(state, action);


const store = createStore(rootReducer);

export default store;
