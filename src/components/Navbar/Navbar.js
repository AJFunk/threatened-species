import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'

export const Navbar = () => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <IndexLink to='/' className='navbar-brand' activeClassName='route--active'>
          Home
        </IndexLink>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <Link to='/countries' activeClassName='route--active'>
              Countries
            </Link>
          </li>
          <li>
            <Link to='/regions' activeClassName='route--active'>
              Regions
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a>Placeholder</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
