import { combineReducers } from 'redux';
import playlist from './playlist';
import framesetting from './framesetting';

const combinedReducer = combineReducers({
  playlist,
  framesetting
});

export default combinedReducer;