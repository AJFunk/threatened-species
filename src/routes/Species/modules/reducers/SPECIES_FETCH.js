const SPECIES_FETCH_REDUCERS = {
  SPECIES_FETCH_FAILURE: (state, action) =>
    Object.assign(
      {},
      state,
      {
        loading: false,
        loaded: false
      }
    ),
  SPECIES_FETCH_LOADING: (state, action) =>
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
  SPECIES_FETCH_SUCCESS: (state, action) =>
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

export default SPECIES_FETCH_REDUCERS
