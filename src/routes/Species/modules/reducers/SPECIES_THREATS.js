const SPECIES_THREATS_REDUCERS = {
  SPECIES_THREATS_LOADING: (state, action) =>
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
  SPECIES_THREATS_FAILURE: (state, action) =>
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
  SPECIES_THREATS_SUCCESS: (state, action) =>
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

export default SPECIES_THREATS_REDUCERS
