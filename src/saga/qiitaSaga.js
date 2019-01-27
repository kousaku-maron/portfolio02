import { take, call, put } from 'redux-saga/effects'
import { getUserItems } from '../modules/qiita'

const data = (type ,payload) => {
  const _data = {
    type: type,
    payload: payload,
  }

  return _data
}

function* getQiitaInfo() {
  while (true) {
    yield take('GET_QIITA_INFO')
    yield put(data('QIITA_USER_ITEMS_REQUEST', null))
    const { result, error } = yield call(getUserItems)
    if(result && !error) {
      yield put(data('QIITA_USER_ITEMS_REQUEST_SUCCESS', result))
    }
    else {
      yield put(data('QIITA_USER_ITEMS_REQUEST_FAILURE', error))
    }
  }
}

const sagas = [
  getQiitaInfo(),
]

export default sagas