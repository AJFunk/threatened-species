const SPECIES_HISTORICAL_REDUCERS = {
  SPECIES_HISTORICAL_LOADING: (state, action) =>
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
  SPECIES_HISTORICAL_FAILURE: (state, action) =>
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
  SPECIES_HISTORICAL_SUCCESS: (state, action) =>
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

export default SPECIES_HISTORICAL_REDUCERS
