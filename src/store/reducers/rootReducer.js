import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  cardsReducer: cardsReducer,
  authReducer: authReducer
});

export default rootReducer;