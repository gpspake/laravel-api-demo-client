import {
  FETCH_WIDGETS,
  FETCH_WIDGETS_SUCCESS,
  FETCH_WIDGETS_FAILURE,
  RESET_WIDGETS,
} from './actions'

const INITIAL_STATE = {
  widgetsList: {
    widgets: [],
    error: null,
    loading: false
  }
}

const fetchWidgets = (state) => {
  const widgetsList = {widgets: [], error: null, loading: true}
  return Object.assign({}, state, {widgetsList})
}

const fetchWidgetsSuccess = (state, action) => {
  const widgetsList = {widgets: action.payload, error: null, loading: false}
  return Object.assign({}, state, {widgetsList})
}

const fetchWidgetsFailure = (state, action) => {
  const error = action.payload || {message: action.payload.message};
  const widgetsList = {widgets: [], error , loading: false}
  return Object.assign({}, state, {widgetsList})
}

const resetWidgets = (state) => {
  const widgetsList = {widgets: [], error: null, loading: false}
  return Object.assign({}, state, {widgetsList})
}

const rootReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_WIDGETS:
      return fetchWidgets(state, action);
    case FETCH_WIDGETS_SUCCESS:
      return fetchWidgetsSuccess(state, action)
    case FETCH_WIDGETS_FAILURE:
      return fetchWidgetsFailure(state, action)
    case RESET_WIDGETS:
      return resetWidgets(state)
    default:
      return state
  }
}

export default rootReducer
