import { all } from 'redux-saga/effects'

import rootSaveOwnerDataSaga from './owners'
import rootSaveTenantDataSaga from './tenants'

export default function* rootSaga() {
  yield all([rootSaveOwnerDataSaga(), rootSaveTenantDataSaga()])
}
