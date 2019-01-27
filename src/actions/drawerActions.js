import { createActions } from 'redux-actions'

const actions = createActions(
  {
    MENU_CHANGE: (args) => (args),
  },
  'DRAWER_TOGGLE',
)

export default actions
