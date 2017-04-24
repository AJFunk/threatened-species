import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const REGIONS_FETCH = 'REGIONS_FETCH'
export const REGIONS_LOADING = 'REGIONS_LOADING'
export const REGIONS_FETCH_FAILURE = 'REGIONS_FETCH_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchRegions = () => {
  return (dispatch, getState) => {
    dispatch({ type: REGIONS_LOADING })
    return new Promise((resolve, reject) => {
      return axios
        .get('/api/Region/all')
        .then(res => {
          dispatch({
            type    : REGIONS_FETCH,
            payload : res.data.results
          })
          resolve()
        })
        .catch(err => {
          dispatch({ type: REGIONS_FETCH_FAILURE })
          return reject(err)
        });
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
  [REGIONS_FETCH]: (state, action) => Object.assign({}, state, {regions: action.payload, loading: false, loaded: true}),
  [REGIONS_FETCH_FAILURE]: (state, action) => Object.assign({}, state, {loading: false, loaded: false}),
  [REGIONS_LOADING]: (state, action) => Object.assign({}, state, {loading: true, loaded: false})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  loaded: false,
  regions: []
}

export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
