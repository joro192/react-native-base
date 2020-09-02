import * as types from './type';

export const getUserInfoAction = () => ({
  type: types.GET_USER,
  payload: {},
});

export const changeLanguage = (language) => {
  return {
    type: types.CHANGE_LANGUAGE,
    language,
  };
};
