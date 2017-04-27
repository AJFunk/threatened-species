const SPECIES_NARRATIVE_REDUCERS = {
  SPECIES_NARRATIVE_LOADING: (state, action) =>
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
  SPECIES_NARRATIVE_FAILURE: (state, action) =>
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
  SPECIES_NARRATIVE_SUCCESS: (state, action) =>
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

export default SPECIES_NARRATIVE_REDUCERS
