import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'species/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Species = require('./containers/SpeciesContainer').default
      const reducer = require('./modules/species').default
      injectReducer(store, { key: 'species', reducer })
      cb(null, Species)
  }, 'species')
  }
})
