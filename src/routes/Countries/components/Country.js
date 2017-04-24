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
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    const { fetchCountry, countries } = this.props;
    fetchCountry(name, this.props.params.isocode)
    for (let i = 0; i < countries.length; i++) {
      if(countries[i].isocode === this.props.params.isocode) {
        this.setState({ name: countries[i].country })
        break;
      }
    }
  }

  render() {
    const { country, loading } = this.props
    const { name } = this.state

    if(country.loading) return <Loading />
    return (
      <div>
        <Link to='/countries'>
          <button className='btn btn-default'>Back to Countries</button>
        </Link>
        <h1>{name}</h1>
        {country.species.map((e,i) => <div key={i}>{e.scientific_name} ({e.category}) - #{e.taxonid}</div>)}
      </div>
    )
  }

}

export default Country