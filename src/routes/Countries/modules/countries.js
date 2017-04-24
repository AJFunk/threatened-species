import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTRIES_FETCH = 'COUNTRIES_FETCH'
export const COUNTRIES_LOADING = 'COUNTRIES_LOADING'
export const COUNTRIES_FETCH_FAILURE = 'COUNTRIES_FETCH_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchCountries = () => {
  return (dispatch, getState) => {
    dispatch({ type: COUNTRIES_LOADING })
    return new Promise((resolve, reject) => {
      return axios
        .get('/api/Country/all')
        .then(res => {
          dispatch({
            type    : COUNTRIES_FETCH,
            payload : res.data.results
          })
          return resolve()
        })
        .catch(err => {
          dispatch({ type: COUNTRIES_FETCH_FAILURE })
          return reject(err)
        });
    })
  }
}

export const actions = {
  fetchCountries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTRIES_FETCH]: (state, action) => Object.assign({}, state, {countries: action.payload, loading: false, loaded: true}),
  [COUNTRIES_FETCH_FAILURE]: (state, action) => Object.assign({}, state, {loading: false, loaded: false}),
  [COUNTRIES_LOADING]: (state, action) => Object.assign({}, state, {loading: true, loaded: false})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  loaded: false,
  countries: []
}

export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
