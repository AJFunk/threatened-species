import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Regions extends Component {

  static propTypes = {
    regions   : PropTypes.array.isRequired,
    fetchRegions : PropTypes.func.isRequired
  }

  componentWillMount() {
    if(!this.props.regions.length) this.props.fetchRegions();
  }

  render() {
    return (
      <div>
        <h3>Regions</h3>
        {this.props.regions.map((e,i) => <div key={i}>{e.name}</div>)}
      </div>
    )
  }

}

export default Regions
