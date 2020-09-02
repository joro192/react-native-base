import {put, takeEvery, call} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import * as types from '../actions/type';

import * as API from '../../constants/Api';

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestLogin, payload);
    yield put({type: types.GET_USER_SUCCESS, payload: response});
  } catch (err) {
    yield put({type: types.GET_USER_FAIL, payload: err});
  }
}
export const watchGetUser = takeEvery(types.GET_USER, getUserInfor);
