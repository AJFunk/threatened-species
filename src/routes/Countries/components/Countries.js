import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'
import Country from './Country'
import CountryCard from './CountryCard'
import countryData from '../../../store/countries'

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
    let countriesDisplay = [];
    let x1, x2, x3, x4;
    if(filteredCountries.length) {
      for (let i = 0; i < filteredCountries.length; i++) {
        if(i % 4 === 0) {
          x1 = <CountryCard key={`${i}-0`} country={filteredCountries[i]} countryData={countryData[filteredCountries[i].isocode]}/>
          x2 = filteredCountries[i+1] ?
            <CountryCard key={`${i}-1`} country={filteredCountries[i+1]} countryData={countryData[filteredCountries[i+1].isocode]}/> : ''
          x3 = filteredCountries[i+2] ?
            <CountryCard key={`${i}-2`} country={filteredCountries[i+2]} countryData={countryData[filteredCountries[i+2].isocode]}/> : ''
          x4 = filteredCountries[i+3] ?
            <CountryCard key={`${i}-3`} country={filteredCountries[i+3]} countryData={countryData[filteredCountries[i+3].isocode]}/> : ''
          countriesDisplay.push(<div key={i} className='row'>{x1}{x2}{x3}{x4}</div>)
        }
      }
    }

    if(loading) return <Loading />
    return (
      <div>
        <h3>Countries</h3>
        <input value={this.state.search} onChange={this.handleChange} placeholder='Search...'/>
        {countriesDisplay}
      </div>
    )
  }

}

export default Countries
