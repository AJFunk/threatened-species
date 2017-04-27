const SPECIES_COUNTRIES_REDUCERS = {
  SPECIES_COUNTRIES_LOADING: (state, action) =>
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
  SPECIES_COUNTRIES_FAILURE: (state, action) =>
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
  SPECIES_COUNTRIES_SUCCESS: (state, action) =>
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

export default SPECIES_COUNTRIES_REDUCERS
