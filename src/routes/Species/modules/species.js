import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const SPECIES_FETCH_SUCCESS = 'SPECIES_FETCH_SUCCESS'
export const SPECIES_FETCH_LOADING = 'SPECIES_FETCH_LOADING'
export const SPECIES_FETCH_FAILURE = 'SPECIES_FETCH_FAILURE'

export const SPECIES_CITATION_SUCCESS = 'SPECIES_CITATION_SUCCESS'
export const SPECIES_CITATION_LOADING = 'SPECIES_CITATION_LOADING'
export const SPECIES_CITATION_FAILURE = 'SPECIES_CITATION_FAILURE'

export const SPECIES_NARRATIVE_SUCCESS = 'SPECIES_NARRATIVE_SUCCESS'
export const SPECIES_NARRATIVE_LOADING = 'SPECIES_NARRATIVE_LOADING'
export const SPECIES_NARRATIVE_FAILURE = 'SPECIES_NARRATIVE_FAILURE'

export const SPECIES_COUNTRIES_SUCCESS = 'SPECIES_COUNTRIES_SUCCESS'
export const SPECIES_COUNTRIES_LOADING = 'SPECIES_COUNTRIES_LOADING'
export const SPECIES_COUNTRIES_FAILURE = 'SPECIES_COUNTRIES_FAILURE'

export const SPECIES_HISTORICAL_SUCCESS = 'SPECIES_HISTORICAL_SUCCESS'
export const SPECIES_HISTORICAL_LOADING = 'SPECIES_HISTORICAL_LOADING'
export const SPECIES_HISTORICAL_FAILURE = 'SPECIES_HISTORICAL_FAILURE'

export const SPECIES_THREATS_SUCCESS = 'SPECIES_THREATS_SUCCESS'
export const SPECIES_THREATS_LOADING = 'SPECIES_THREATS_LOADING'
export const SPECIES_THREATS_FAILURE = 'SPECIES_THREATS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
const fetchSpecies = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_FETCH_LOADING })
    return axios.get('/api/Species/find', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_FETCH_SUCCESS,
          payload : res.data.result[0]
        })
      )
      .catch(err => dispatch({ type: SPECIES_FETCH_FAILURE }));
  }

const fetchCitation = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_CITATION_LOADING })
    return axios.get('/api/Species/citation', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_CITATION_SUCCESS,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: SPECIES_CITATION_FAILURE }));
  }

const fetchNarrative = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_NARRATIVE_LOADING })
    return axios.get('/api/Species/narrative', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_NARRATIVE_SUCCESS,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: SPECIES_NARRATIVE_FAILURE }));
  }

const fetchCountries = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_COUNTRIES_LOADING })
    return axios.get('/api/Species/countries', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_COUNTRIES_SUCCESS,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: SPECIES_COUNTRIES_FAILURE }));
  }

const fetchHistorical = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_HISTORICAL_LOADING })
    return axios.get('/api/Species/historical', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_HISTORICAL_SUCCESS,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: SPECIES_HISTORICAL_FAILURE }));
  }

const fetchThreats = id =>
  (dispatch, getState) => {
    dispatch({ type: SPECIES_THREATS_LOADING })
    return axios.get('/api/Threat/fetch', { params: { id } })
      .then(res =>
        dispatch({
          type    : SPECIES_THREATS_SUCCESS,
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: SPECIES_THREATS_FAILURE }));
  }

export const actions = {
  fetchCitation,
  fetchCountries,
  fetchHistorical,
  fetchSpecies,
  fetchNarrative,
  fetchThreats
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const SPECIES_FETCH_ACTIONS = {
  [SPECIES_FETCH_FAILURE]: (state, action) => Object.assign({}, state, {loading: false, loaded: false}),
  [SPECIES_FETCH_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        info: Object.assign(
          {},
          state.info,
          {
            loading: true,
            loaded: false
          }
        )
      }
    ),
  [SPECIES_FETCH_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        info: {
          info: action.payload,
          loading: false,
          loaded: true,
          failed: false
        },
      }
    )
}

const SPECIES_CITATION_ACTIONS = {
  [SPECIES_CITATION_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        citation: Object.assign(
          {},
          state.citation,
          {
            loading: true
          }
        )
      }
    ),
  [SPECIES_CITATION_FAILURE]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        citation: Object.assign(
          {},
          state.citation,
          {
            loading: false,
            failed: true
          }
        )
      }
    ),
  [SPECIES_CITATION_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        citation: Object.assign(
          {},
          state.citation,
          {
            loading: false,
            loaded: true,
            failed: false,
            citation: action.payload
          }
        )
      }
    )
}

const SPECIES_NARRATIVE_ACTIONS = {
  [SPECIES_NARRATIVE_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        narrative: Object.assign(
          {},
          state.narrative,
          {
            loading: true
          }
        )
      }
    ),
  [SPECIES_NARRATIVE_FAILURE]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        narrative: Object.assign(
          {},
          state.narrative,
          {
            loading: false,
            failed: true
          }
        )
      }
    ),
  [SPECIES_NARRATIVE_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        narrative: Object.assign(
          {},
          state.narrative,
          {
            loading: false,
            loaded: true,
            failed: false,
            narrative: action.payload
          }
        )
      }
    )
}

const SPECIES_COUNTRIES_ACTIONS = {
  [SPECIES_COUNTRIES_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        countries: Object.assign(
          {},
          state.countries,
          {
            loading: true
          }
        )
      }
    ),
  [SPECIES_COUNTRIES_FAILURE]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        countries: Object.assign(
          {},
          state.countries,
          {
            loading: false,
            failed: true
          }
        )
      }
    ),
  [SPECIES_COUNTRIES_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        countries: Object.assign(
          {},
          state.countries,
          {
            loading: false,
            loaded: true,
            failed: false,
            countries: action.payload
          }
        )
      }
    )
}

const SPECIES_HISTORICAL_ACTIONS = {
  [SPECIES_HISTORICAL_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        historical: Object.assign(
          {},
          state.historical,
          {
            loading: true
          }
        )
      }
    ),
  [SPECIES_HISTORICAL_FAILURE]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        historical: Object.assign(
          {},
          state.historical,
          {
            loading: false,
            failed: true
          }
        )
      }
    ),
  [SPECIES_HISTORICAL_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        historical: Object.assign(
          {},
          state.historical,
          {
            loading: false,
            loaded: true,
            failed: false,
            historical: action.payload
          }
        )
      }
    )
}

const SPECIES_THREATS_ACTIONS = {
  [SPECIES_THREATS_LOADING]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        threats: Object.assign(
          {},
          state.threats,
          {
            loading: true
          }
        )
      }
    ),
  [SPECIES_THREATS_FAILURE]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        threats: Object.assign(
          {},
          state.threats,
          {
            loading: false,
            failed: true
          }
        )
      }
    ),
  [SPECIES_THREATS_SUCCESS]: (state, action) =>
    Object.assign(
      {},
      state,
      {
        threats: Object.assign(
          {},
          state.threats,
          {
            loading: false,
            loaded: true,
            failed: false,
            threats: action.payload
          }
        )
      }
    )
}

const ACTION_HANDLERS = Object.assign(
  {},
  SPECIES_FETCH_ACTIONS,
  SPECIES_CITATION_ACTIONS,
  SPECIES_NARRATIVE_ACTIONS,
  SPECIES_COUNTRIES_ACTIONS,
  SPECIES_HISTORICAL_ACTIONS,
  SPECIES_THREATS_ACTIONS
)

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  info: {
    info: {},
    loading: false,
    loaded: false,
    failed: false,
  },
  citation: {
    loading: false,
    loaded: false,
    failed: false,
    citation: []
  },
  countries: {
    loading: false,
    loaded: false,
    failed: false,
    countries: []
  },
  historical: {
    loading: false,
    loaded: false,
    failed: false,
    historical: []
  },
  narrative: {
    loading: false,
    loaded: false,
    failed: false,
    narrative: []
  },
  threats: {
    loading: false,
    loaded: false,
    failed: false,
    threats: []
  },
}

export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
