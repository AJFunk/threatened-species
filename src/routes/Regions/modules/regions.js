import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const REGIONS_FETCH = 'REGIONS_FETCH';

// ------------------------------------
// Actions
// ------------------------------------
export const fetchRegions = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // TODO: Dispatch loading action
      // TODO: Dispatch failure action
      return axios
        .get('/api/Region/all')
        .then(res => {
          dispatch({
            type    : REGIONS_FETCH,
            payload : res.data.results
          })
          resolve()
        })
        .catch(err => reject(err));
    })
  }
}

export const actions = {
  fetchRegions
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REGIONS_FETCH]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
