import { GET_WIDGETS } from './actions'

const DEFAULT_STATE = {
  widgets: []
}

const getWidgets = (state, action) => {
  const newState = Object.assign({}, state)
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_WIDGETS:
      return getWidgets(state, action)
    default:
      return state
  }
}

export default rootReducer
