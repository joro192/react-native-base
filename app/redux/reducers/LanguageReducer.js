import * as types from '../actions/type';
import I18n from 'react-native-i18n';

var initialState = {
  language: 'vi',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE: {
      I18n.locale = action.language;
      return {language: action.language};
    }
    default:
      return state;
  }
}
