import { createActions } from 'redux-actions'

const actions = createActions(
  {
    GITHUB_USERS_REQUEST_SUCCESS: (args) => (args),
    GITHUB_USERS_REQUEST_FAILURE: (args) => (args),
  },
  'GITHUB_USERS_REQUEST',
)

export default actions
