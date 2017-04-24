import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'
import Country from './Country'

class Countries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = {
      showCountry: false
    }
    this.fetchAndShowCountry = this.fetchAndShowCountry.bind(this)
    this.backToCountries = this.backToCountries.bind(this)
  }

  fetchAndShowCountry(name, isocode) {
    this.props.fetchCountry(name, isocode)
    this.setState({ showCountry: true })
  }

  backToCountries() {
    this.setState({ showCountry: false })
  }

  render() {
    const { loading, countries, country} = this.props.countries

    if(loading) return <Loading />
    if(this.state.showCountry) return <Country country={country} backToCountries={this.backToCountries} />

    return (
      <div>
        <h3>Countries</h3>
        {countries.map((e,i) => <div key={i} onClick={this.fetchAndShowCountry.bind(this, e.country, e.isocode)}>{e.country}</div>)}
      </div>
    )
  }

}

export default Countries
