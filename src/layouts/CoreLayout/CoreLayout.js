import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='core-layout__wrapper'>
    <Navbar />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
