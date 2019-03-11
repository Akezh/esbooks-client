import { combineReducers } from 'redux';
import auth from './auth';
import underlayerReducer from './underlayerReducer';

const rootReducer = combineReducers({
  auth,
  underlayer: underlayerReducer,
});

export default rootReducer;