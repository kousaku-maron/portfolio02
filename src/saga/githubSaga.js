import { take, call, put } from 'redux-saga/effects'
import { getUsers, getRepos, getEvents } from '../modules/github'
import { test } from '../modules/firebase'

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

function* getGithubInfo() {
  while (true) {
    yield take('GET_GITHUB_INFO')
    yield put(data('GITHUB_REPOS_REQUEST', null))
    const { result, error } = yield call(getRepos)
    if(result && !error) {
      yield put(data('GITHUB_REPOS_REQUEST_SUCCESS', result))
    }
    else {
      yield put(data('GITHUB_REPOS_REQUEST_FAILURE', error))
    }
  }
}

const sagas = [
  getProfileInfo(),
  getGithubInfo(),
]

export default sagas