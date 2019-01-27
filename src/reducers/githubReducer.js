import { handleActions } from 'redux-actions'
import actions from '../actions/githubActions'

const initialState = {
  user: {
    processing: false,
    contents: null,
  }
}

const reducer = handleActions({
  [actions.githubUsersRequest]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      processing: true,
    },
  }),
  [actions.githubUsersRequestSuccess]: (state, action) => ({
    ...state,
    user: {
      processing: false,
      contents: action.payload,
    },
  }),
  [actions.githubUsersRequestFailure]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      processing: false,
    },
  }),
}, initialState)

export default reducer