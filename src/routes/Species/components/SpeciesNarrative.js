import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesNarrative extends Component {

  static propTypes = {
    narrative: PropTypes.object.isRequired,
  }

  render() {
    const narrative = this.props.narrative
    if(narrative.loading) return <h4>LOADING</h4>
    if(narrative.failed) return <h4>FAILED</h4>
    if(!narrative.narrative.length) return <h4>NO NARRATIVE FOUND</h4>
    return (
      <div className='narrative'>
        <h3>Narrative</h3>
        {narrative.narrative.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

}

export default SpeciesNarrative
