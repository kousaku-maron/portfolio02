import { handleActions } from 'redux-actions'
import actions from '../actions/qiitaActions'

const initialState = {
  user: {
    processing: false,
    contents: null,
  },
  chart: {
    data: null,
  },
}

const reducer = handleActions({
  [actions.qiitaUserItemsRequest]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      processing: true,
    },
  }),
  [actions.qiitaUserItemsRequestSuccess]: (state, action) => ({
    ...state,
    user: {
      processing: false,
      contents: action.payload,
    },
  }),
  [actions.qiitaUserItemsRequestFailure]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      processing: false,
    },
  }),
  [actions.setQiitaChartData]: (state, action) => ({
    ...state,
    chart: {
      ...state.chart,
      data: action.payload,
    },
  }),
}, initialState)

export default reducer
