import { take, call, put } from 'redux-saga/effects'
import { getUsers } from '../modules/github'

const data = (type ,payload) => {
  const _data = {
    type: type,
    payload: payload,
  }

  return _data
}

function* getProfileInfo() {
  while (true) {
    yield take('GET_PROFILE_INFO')
    yield put(data('GITHUB_USERS_REQUEST', null))
    const { result, error } = yield call(getUsers)
    if(result && !error) {
      yield put(data('GITHUB_USERS_REQUEST_SUCCESS', result))
    }
    else {
      yield put(data('GITHUB_USERS_REQUEST_FAILURE', error))
    }
  }
}

const sagas = [
  getProfileInfo(),
]

export default sagas