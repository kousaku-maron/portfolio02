import { createActions } from 'redux-actions'

const actions = createActions(
  {
    SET_UID: (args) => (args),
  },
  'LOGIN_GOOGLE',
  'LOGIN_FACEBOOK',
  'LOGOUT',
)

export default actions
