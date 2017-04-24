import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Regions extends Component {

  static propTypes = {
    regions   : PropTypes.object.isRequired,
    fetchRegions : PropTypes.func.isRequired
  }

  componentWillMount() {
    if(!this.props.regions.loaded) this.props.fetchRegions();
  }

  render() {
    const { loading, regions } = this.props.regions
    if(loading) {
      return (
        <div>
          <h1>LOADING</h1>
        </div>
      )
    }
    return (
      <div>
        <h3>Regions</h3>
        {regions.map((e,i) => <div key={i}>{e.name}</div>)}
      </div>
    )
  }

}

export default Regions
