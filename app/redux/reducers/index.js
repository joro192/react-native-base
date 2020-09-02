import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import LanguageReducer from './LanguageReducer';
import * as types from '../actions/type';

appReducer = combineReducers({
  userReducer: UserReducer,
  languageReducer: LanguageReducer
});

const initialState = appReducer({}, {});

export default rootReducer = (state, action) => {
  if (action.type === types.RESET) {
    state = initialState;
  }

  return appReducer(state, action);
};
