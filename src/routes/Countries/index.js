import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'countries',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Countries = require('./containers/CountriesContainer').default
      const reducer = require('./modules/countries').default

      /*  Add the reducer to the store on key 'countries'  */
      injectReducer(store, { key: 'countries', reducer })

      /*  Return getComponent   */
      cb(null, Countries)

    /* Webpack named bundle   */
  }, 'countries')
  }
})
