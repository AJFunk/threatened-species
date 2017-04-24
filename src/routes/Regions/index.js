import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'regions',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Regions = require('./containers/RegionsContainer').default
      const reducer = require('./modules/regions').default

      /*  Add the reducer to the store on key 'regions'  */
      injectReducer(store, { key: 'regions', reducer })

      /*  Return getComponent   */
      cb(null, Regions)

    /* Webpack named bundle   */
  }, 'regions')
  }
})
