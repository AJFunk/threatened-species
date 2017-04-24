import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { fetchCountries } from '../routes/Countries/modules/countries'
import { fetchRegions } from '../routes/Regions/modules/regions'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  constructor() {
    super()
  }

  shouldComponentUpdate () {
    return false
  }

  componentDidMount() {
    this.props.fetchCountries()
    this.props.fetchRegions()
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

const mapDispatchToProps = {
  fetchCountries,
  fetchRegions
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  regions: state.regions
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
