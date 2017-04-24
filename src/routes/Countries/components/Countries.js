import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Countries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired,
    fetchCountries: PropTypes.func.isRequired
  }

  componentDidMount() {
    if(!this.props.countries.loaded) this.props.fetchCountries();
  }

  render() {
    const { loading, countries} = this.props.countries

    if(loading) {
      return (
        <div>
          <h1>LOADING</h1>
        </div>
      )
    }
    return (
      <div>
        <h3>Countries</h3>
        {countries.map((e,i) => <div key={i} onClick={this.props.fetchCountry.bind(this, e.country, e.isocode)}>{e.country}</div>)}
      </div>
    )
  }

}

export default Countries
