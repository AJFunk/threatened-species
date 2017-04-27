import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesHistorical extends Component {

  static propTypes = {
    historical: PropTypes.object.isRequired,
  }

  render() {
    const historical = this.props.historical
    if(historical.loading) return <h4>LOADING</h4>
    if(historical.failed) return <h4>FAILED</h4>
    if(!historical.historical.length) return <h4>NO HISTORICAL FOUND</h4>
    return (
      <div className='historical'>
        <h3>Historical</h3>
        {historical.historical.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

}

export default SpeciesHistorical
