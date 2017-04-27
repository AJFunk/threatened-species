import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesThreats extends Component {

  static propTypes = {
    threats: PropTypes.object.isRequired,
  }

  render() {
    const threats = this.props.threats
    if(threats.loading) return <h4>LOADING</h4>
    if(threats.failed) return <h4>FAILED</h4>
    if(!threats.threats.length) return <h4>NO THREATS FOUND</h4>
    return (
      <div className='threats'>
        <h3>Threats</h3>
        {threats.threats.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

}

export default SpeciesThreats
