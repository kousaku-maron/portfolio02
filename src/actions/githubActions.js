import { createActions } from 'redux-actions'

const actions = createActions(
  {
    GITHUB_USERS_REQUEST_SUCCESS: (args) => (args),
    GITHUB_USERS_REQUEST_FAILURE: (args) => (args),
    GITHUB_REPOS_REQUEST_SUCCESS: (args) => (args),
    GITHUB_REPOS_REQUEST_FAILURE: (args) => (args),
    GITHUB_EVENTS_REQUEST_SUCCESS: (args) => (args),
    GITHUB_EVENTS_REQUEST_FAILURE: (args) => (args),
  },
  'GET_GITHUB_INFO',
  'GITHUB_USERS_REQUEST',
  'GITHUB_EVENTS_REQUEST',
  'GITHUB_REPOS_REQUEST',
)

export default actions
