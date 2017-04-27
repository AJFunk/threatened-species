const SPECIES_CITATION_REDUCERS = {
  SPECIES_CITATION_LOADING: (state, action) =>
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
  SPECIES_CITATION_FAILURE: (state, action) =>
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
  SPECIES_CITATION_SUCCESS: (state, action) =>
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

export default SPECIES_CITATION_REDUCERS
