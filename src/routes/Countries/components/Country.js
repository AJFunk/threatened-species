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
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  componentDidMount() {
    const { fetchCountry, countries } = this.props;
    fetchCountry(name, this.props.params.isocode)
  }

  render() {
    const { country, loading, name } = this.props
    const filteredSpecies = country.species.filter(e => e.scientific_name.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1)

    if(country.loading) return <Loading />
    return (
      <div>
        <Link to='/countries'>
          <button className='btn btn-default'>Back to Countries</button>
        </Link>
        <input type='text' value={this.state.query} placeholder='Search by name...' onChange={this.handleChange}/>
        <h1>{country.name}</h1>
        <ul>
          {filteredSpecies.map((e,i) =>
            <li key={i}>
              <Link to={`/species/${e.taxonid}`}>{e.scientific_name} ({e.category}) - #{e.taxonid}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }

}

export default Country
