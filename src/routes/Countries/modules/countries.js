import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTRIES_FETCH = 'COUNTRIES_FETCH'
export const COUNTRIES_LOADING = 'COUNTRIES_LOADING'
export const COUNTRIES_FETCH_FAILURE = 'COUNTRIES_FETCH_FAILURE'
export const COUNTRY_FETCH = 'COUNTRY_FETCH'
export const COUNTRY_LOADING = 'COUNTRY_LOADING'
export const COUNTRY_FETCH_FAILURE = 'COUNTRY_FETCH_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchCountries = () => {
  return (dispatch, getState) => {
    dispatch({ type: COUNTRIES_LOADING })
    return axios.get('/api/Country/all')
      .then(res =>
        dispatch({
          type    : COUNTRIES_FETCH,
          payload : res.data.results
        })
      )
      .catch(err => dispatch({ type: COUNTRIES_FETCH_FAILURE }));
  }
}

export const fetchCountry = (name, isocode) => {
  return (dispatch, getState) => {
    dispatch({ type: COUNTRY_LOADING, payload: { name, isocode }})
    return axios.get('/api/Country/species', {params: { country: isocode }})
      .then(res =>
        dispatch({
          type    : COUNTRY_FETCH,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: COUNTRY_FETCH_FAILURE }));
  }
}

export const actions = {
  fetchCountries,
  fetchCountry
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTRIES_FETCH]: (state, action) => Object.assign({}, state, {countries: action.payload, loading: false, loaded: true}),
  [COUNTRIES_FETCH_FAILURE]: (state, action) => Object.assign({}, state, {loading: false, loaded: false}),
  [COUNTRIES_LOADING]: (state, action) => Object.assign({}, state, {loading: true, loaded: false}),
  [COUNTRY_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        country: Object.assign(
          {},
          state.country,
          {
            loading: true,
            loaded: false,
            isocode: action.payload.isocode,
            name: action.payload.name
          }
        )
      }
    ),
  [COUNTRY_FETCH]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        country: Object.assign(
          {},
          state.country,
          {
            loading: false,
            loaded: true,
            species: action.payload
          }
        )
      }
    ),
  [COUNTRY_FETCH_FAILURE]: (state, action) => Object.assign({}, state, {loading: false, loaded: false})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  loaded: false,
  countries: [],
  country: {
    loading: false,
    loaded: false,
    country: '',
    isocode: '',
    species: []
  }
}

export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
