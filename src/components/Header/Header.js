import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Threatened Species</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/countries' activeClassName='route--active'>
      Countries
    </Link>
    {' · '}
    <Link to='/regions' activeClassName='route--active'>
      Regions
    </Link>
  </div>
)

export default Header
