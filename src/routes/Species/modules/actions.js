import axios from 'axios'

const fetchSpecies = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_FETCH_LOADING' })
    return axios.get('/api/Species/find', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_FETCH_SUCCESS',
          payload : res.data.result[0]
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_FETCH_FAILURE' }));
  }

const fetchCitation = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_CITATION_LOADING' })
    return axios.get('/api/Species/citation', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_CITATION_SUCCESS',
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_CITATION_FAILURE' }));
  }

const fetchNarrative = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_NARRATIVE_LOADING' })
    return axios.get('/api/Species/narrative', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_NARRATIVE_SUCCESS',
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_NARRATIVE_FAILURE' }));
  }

const fetchCountries = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_COUNTRIES_LOADING' })
    return axios.get('/api/Species/countries', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_COUNTRIES_SUCCESS',
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_COUNTRIES_FAILURE' }));
  }

const fetchHistorical = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_HISTORICAL_LOADING' })
    return axios.get('/api/Species/historical', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_HISTORICAL_SUCCESS',
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_HISTORICAL_FAILURE' }));
  }

const fetchThreats = id =>
  (dispatch, getState) => {
    dispatch({ type: 'SPECIES_THREATS_LOADING' })
    return axios.get('/api/Threat/fetch', { params: { id } })
      .then(res =>
        dispatch({
          type    : 'SPECIES_THREATS_SUCCESS',
          payload : res.data.result
        })
      )
      .catch(err => dispatch({ type: 'SPECIES_THREATS_FAILURE' }));
  }

const actions = {
  fetchCitation,
  fetchCountries,
  fetchHistorical,
  fetchSpecies,
  fetchNarrative,
  fetchThreats
}

export default actions
