import { handleActions } from 'redux-actions'
import actions from '../actions/githubActions'

const initialState = {
  user: {
    processing: false,
    contents: null,
  },
  repo: {
    processing: false,
    contents: null,
  },
  event: {
    processing: false,
    contents: null,
  },
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
  [actions.githubReposRequest]: (state, action) => ({
    ...state,
    repo: {
      ...state.repo,
      processing: true,
    },
  }),
  [actions.githubReposRequestSuccess]: (state, action) => ({
    ...state,
    repo: {
      processing: false,
      contents: action.payload,
    },
  }),
  [actions.githubReposRequestFailure]: (state, action) => ({
    ...state,
    repo: {
      ...state.repo,
      processing: false,
    },
  }),
  [actions.githubEventsRequest]: (state, action) => ({
    ...state,
    event: {
      ...state.event,
      processing: true,
    },
  }),
  [actions.githubEventsRequestSuccess]: (state, action) => ({
    ...state,
    event: {
      processing: false,
      contents: action.payload,
    },
  }),
  [actions.githubEventsRequestFailure]: (state, action) => ({
    ...state,
    event: {
      ...state.event,
      processing: false,
    },
  }),
}, initialState)

export default reducer