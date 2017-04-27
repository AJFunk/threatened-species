import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpeciesCitation extends Component {

  static propTypes = {
    citation: PropTypes.object.isRequired,
  }

  render() {
    const citation = this.props.citation
    if(citation.loading) return <h4>LOADING</h4>
    if(citation.failed) return <h4>FAILED</h4>
    if(!citation.citation.length) return <h4>NO CITATION FOUND</h4>
    return (
      <div className='citation'>
        <h3>Citation</h3>
        {citation.citation.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

}

export default SpeciesCitation
