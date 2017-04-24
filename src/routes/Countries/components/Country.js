import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'

export const Country = (props) => {
  const { country, backToCountries, loading } = props

  if(country.loading) return <Loading />
  return (
    <div>
      <button className='btn btn-default' onClick={backToCountries}>Back to Countries</button>
      <h1>{country.name}</h1>
      {country.species.map((e,i) => <div key={i}>{e.scientific_name} ({e.category}) - #{e.taxonid}</div>)}
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.object.isRequired,
  backToCountries: PropTypes.func.isRequired
}

export default Country
