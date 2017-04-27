import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesCountries extends Component {

  static propTypes = {
    countries: PropTypes.object.isRequired,
  }

  render() {
    const countries = this.props.countries
    if(countries.loading) return <h4>LOADING</h4>
    if(countries.failed) return <h4>FAILED</h4>
    if(!countries.countries.length) return <h4>NO COUNTRIES FOUND</h4>
    return (
      <div className='countries'>
        <h3>Countries of Occurance</h3>
        {countries.countries.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

}

export default SpeciesCountries
