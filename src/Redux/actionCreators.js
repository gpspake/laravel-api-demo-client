import axios from 'axios'

//Widget List
export const FETCH_WIDGETS = 'FETCH_WIDGETS';
export const FETCH_WIDGETS_SUCCESS = 'FETCH_WIDGETS_SUCCESS';
export const FETCH_WIDGETS_FAILURE = 'FETCH_WIDGETS_FAILURE';
export const RESET_WIDGETS = 'RESET_WIDGETS';

const ROOT_URL = 'http://laravel-api-demo.app/api';

export function fetchWidgets() {
  const request = axios.get(`${ROOT_URL}/widgets`);
  return {
    type: FETCH_WIDGETS,
    payload: request
  };
}

export function fetchWidgetsSuccess(widgets) {
  return {
    type: FETCH_WIDGETS_SUCCESS,
    payload: widgets
  };
}

export function fetchWidgetsFailure(error) {
  return {
    type: FETCH_WIDGETS_FAILURE,
    payload: error
  };
}
