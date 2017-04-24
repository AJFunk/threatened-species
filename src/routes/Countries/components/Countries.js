import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Countries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired,
    fetchCountries: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.state = {
      showCountry: false
    }
    this.fetchAndShowCountry = this.fetchAndShowCountry.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.backToCountries = this.backToCountries.bind(this)
  }

  componentDidMount() {
    if(!this.props.countries.loaded) this.props.fetchCountries()
  }

  fetchAndShowCountry(name, isocode) {
    this.props.fetchCountry(name, isocode)
    this.setState({ showCountry: true })
  }

  backToCountries() {
    this.setState({ showCountry: false })
  }

  renderLoading() {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  }

  renderCountry() {
    const { country } = this.props.countries
    if(country.loading) return this.renderLoading()
    return (
      <div>
        <button className='btn btn-default' onClick={this.backToCountries}>Back to Countries</button>
        <h1>{country.name}</h1>
        {country.species.map((e,i) => <div key={i}>{e.scientific_name} ({e.category}) - #{e.taxonid}</div>)}
      </div>
    )
  }

  render() {
    const { loading, countries} = this.props.countries

    if(loading) return this.renderLoading()
    if(this.state.showCountry) return this.renderCountry()

    return (
      <div>
        <h3>Countries</h3>
        {countries.map((e,i) => <div key={i} onClick={this.fetchAndShowCountry.bind(this, e.country, e.isocode)}>{e.country}</div>)}
      </div>
    )
  }

}

export default Countries
