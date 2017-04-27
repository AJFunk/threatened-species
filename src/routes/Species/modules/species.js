import Reducers from './reducers'

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

export default function speciesReducer (state = initialState, action) {
  const handler = Reducers[action.type]
  return handler ? handler(state, action) : state
}
