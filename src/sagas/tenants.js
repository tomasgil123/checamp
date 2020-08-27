import { put, all, takeLatest, call } from 'redux-saga/effects'

import { saveDataTenant } from 'src/services/tenants'
import { saveTenantDataSuccess, saveTenantDataFail } from 'src/actions/tenants'

export function* saveTenantData(action) {
  try {
    const resultRequest = yield call(saveDataTenant, action.tenantData)

    if (resultRequest.data.success) {
      yield put(saveTenantDataSuccess())
    } else {
      yield put(saveTenantDataFail())
    }
  } catch (err) {
    yield put(saveTenantDataFail())
  }
}

export default function* rootSaveTenantDataSaga() {
  yield all([takeLatest('SAVE_TENANT_DATA_INIT', saveTenantData)])
}
