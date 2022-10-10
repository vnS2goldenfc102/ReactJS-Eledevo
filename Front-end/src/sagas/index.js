import { all } from 'redux-saga/effects';
import { itemSagas } from './ItemSagas';
export default function* rootSaga() {
  yield all([
    ...itemSagas
  ]);
}