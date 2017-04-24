import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import Loading from '../../../components/Loading'
import Country from './Country'

class Countries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired
  }

  constructor() {
    super()
  }

  render() {
    const { loading, countries, country} = this.props.countries

    if(loading) return <Loading />
    return (
      <div>
        <h3>Countries</h3>
        {countries.map((e,i) =>
          <div key={i}>
            <Link to={`/countries/${e.isocode}`}>{e.country}</Link>
          </div>
        )}
      </div>
    )
  }

}

export default Countries
