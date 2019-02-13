import { take, call, put } from 'redux-saga/effects'
import { getGithubRepositories } from '../modules/firebase'

const data = (type ,payload) => {
  const _data = {
    type: type,
    payload: payload,
  }

  return _data
}

function* getGithubInfo() {
  while (true) {
    yield take('GET_GITHUB_INFO')
    yield put(data('GITHUB_REPOS_REQUEST', null))
    const { result, error } = yield call(getGithubRepositories)
    if(result && !error) {
      yield put(data('GITHUB_REPOS_REQUEST_SUCCESS', result))
    }
    else {
      yield put(data('GITHUB_REPOS_REQUEST_FAILURE', error))
    }
  }
}

const sagas = [
  getGithubInfo(),
]

export default sagas
