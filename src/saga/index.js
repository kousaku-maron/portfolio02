import { all } from 'redux-saga/effects'
import githubSaga from './githubSaga'
import qiitaSaga from './qiitaSaga'

export default function* rootSaga() {
  yield all([
    ...githubSaga,
    ...qiitaSaga,
  ])
}