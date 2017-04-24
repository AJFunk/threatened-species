import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'regions',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Regions = require('./containers/RegionsContainer').default
      const reducer = require('./modules/regions').default
      injectReducer(store, { key: 'regions', reducer })
      cb(null, Regions)
  }, 'regions')
  }
})
