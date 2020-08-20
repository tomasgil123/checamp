import { all } from 'redux-saga/effects'

import rootSaveOwnerDataSaga from './owners'

export default function* rootSaga() {
  yield all([rootSaveOwnerDataSaga()])
}
