import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesInfo extends Component {

  static propTypes = {
    info: PropTypes.object.isRequired,
  }

  render() {
    const info = this.props.info
    if(info.loading) return <h4>LOADING</h4>
    if(info.failed) return <h4>FAILED</h4>
    if(!Object.keys(info.info).length) return <h4>NO INFO FOUND</h4>
    return (
      <div className='info'>
        <h1>Species</h1>
        {Object.keys(info.info).map((e,i) =>
          <div key={i}>{e}: {info.info[e] || 'not found'}</div>
        )}
      </div>
    )
  }

}

export default SpeciesInfo
