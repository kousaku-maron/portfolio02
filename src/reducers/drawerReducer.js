import { handleActions } from 'redux-actions'
import actions from '../actions/drawerActions'

import { items } from '../constants/drawer'

const initialState = { 
  showMenu: false,
  menu: 'welcome',
}

const reducer = handleActions({
  [actions.showMenuToggle]: (state, action) => ({
    ...state,
    showMenu: !state.showMenu,
  }),
  [actions.menuChange]: (state, action) => ({
    ...state,
    menu: action.payload,
  }),
}, initialState)

export default reducer
