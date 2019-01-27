import { handleActions } from 'redux-actions'
import actions from '../actions/drawerActions'

import { items } from '../constants/drawer'

const initialState = { 
  open: false,
  menu: items[0].id,
}

const reducer = handleActions({
  [actions.drawerToggle]: (state, action) => ({
    ...state,
    open: !state.open,
  }),
  [actions.menuChange]: (state, action) => ({
    ...state,
    menu: action.payload,
  }),
}, initialState)

export default reducer