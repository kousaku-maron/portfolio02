import { take, call, put } from 'redux-saga/effects'
import { getUserItems, createChartData } from '../modules/qiita'
import { getQiitaArticles } from '../modules/firebase'

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
    const { result, error } = yield call(getQiitaArticles)
    if(result && !error) {
      yield put(data('QIITA_USER_ITEMS_REQUEST_SUCCESS', result))
    }
    else {
      yield put(data('QIITA_USER_ITEMS_REQUEST_FAILURE', error))
    }
  }
}

function* createQiitaChartData() {
  while (true) {
    const action = yield take('QIITA_USER_ITEMS_REQUEST_SUCCESS')
    const chartData = yield call(createChartData(action.payload))
    if(chartData) {
      yield put(data('SET_QIITA_CHART_DATA', chartData))
    }
  }
}

const sagas = [
  getQiitaInfo(),
  // createQiitaChartData(),
]

export default sagas