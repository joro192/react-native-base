import * as sagas from './NetworkSaga';

export default function* rootSaga() {
  yield sagas.watchGetUser;
}
