import { combineReducers } from 'redux';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  underlayer: underlayerReducer,
});

export default rootReducer;