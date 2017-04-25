import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'
import Country from './Country'
import CountryCard from './CountryCard'

class Countries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { loading, country } = this.props.countries
    const filteredCountries = this.props.countries.countries.filter(c => c.country.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)

    if(loading) return <Loading />
    return (
      <div>
        <h3>Countries</h3>
        <input value={this.state.search} onChange={this.handleChange} placeholder='Search...'/>
        {filteredCountries.map((e,i) =>
          <CountryCard key={i} country={e}/>
        )}
      </div>
    )
  }

}

export default Countries
