import { createActions } from 'redux-actions'

const actions = createActions(
  {
    QIITA_USER_ITEMS_REQUEST_SUCCESS: (args) => (args),
    QIITA_USER_ITEMS_REQUEST_FAILURE: (args) => (args),
  },
  'QIITA_USER_ITEMS_REQUEST',
  'GET_QIITA_INFO',
)

export default actions
