import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import Loading from '../../../components/Loading'

class Country extends Component {

  static propTypes = {
    country: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    fetchCountry: PropTypes.func.isRequired
  }

  constructor() {
    super()
  }

  componentDidMount() {
    const { fetchCountry, countries } = this.props;
    fetchCountry(name, this.props.params.isocode)
  }

  render() {
    const { country, loading, name } = this.props

    if(country.loading) return <Loading />
    return (
      <div>
        <Link to='/countries'>
          <button className='btn btn-default'>Back to Countries</button>
        </Link>
        <h1>{country.name}</h1>
        {country.species.map((e,i) => <div key={i}>{e.scientific_name} ({e.category}) - #{e.taxonid}</div>)}
      </div>
    )
  }

}

export default Country
