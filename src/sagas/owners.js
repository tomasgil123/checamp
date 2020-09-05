import { put, all, takeLatest, call } from 'redux-saga/effects'

import { saveDataInSpreadsheet } from 'src/services/formData'
import { saveOwnerDataSuccess, saveOwnerDataFail } from 'src/actions/owners'

export function* saveOwnerData(action) {
  try {
    const resultRequest = yield call(saveDataInSpreadsheet, action.ownerData, 'owner')

    if (resultRequest.data.success) {
      yield put(saveOwnerDataSuccess())
    } else {
      yield put(saveOwnerDataFail())
    }
  } catch (err) {
    yield put(saveOwnerDataFail())
  }
}

export default function* rootSaveOwnerDataSaga() {
  yield all([takeLatest('SAVE_OWNER_DATA_INIT', saveOwnerData)])
}
