import React from 'react'
import { Link } from 'react-router'
import './CountryCard.scss'

export const CountryCard = (props) => {
  console.log("PROPS", props);
  const { isocode, country } = props.country
  const { flag } = props.countryData
  return (
    <div className='country-card col-xs-12 col-sm-6 col-md-3'>
      <Link to={`/countries/${isocode}`}>
        <h4>{country}</h4>
        <img src={flag} />
      </Link>
    </div>
  )
}

export default CountryCard
