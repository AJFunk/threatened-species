import React from 'react'
import { Link } from 'react-router'
//import './CountryCard.scss'

export const CountryCard = (props) => {
  const { name, isocode, country } = props.country
  return (
    <div>
      <h4>{name}</h4>
      <Link to={`/countries/${isocode}`}>{country}</Link>
    </div>
  )
}

export default CountryCard
