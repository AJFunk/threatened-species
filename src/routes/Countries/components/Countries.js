import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Countries extends Component {

  static propTypes = {
    countries   : PropTypes.array.isRequired,
    fetchCountries : PropTypes.func.isRequired
  }

  componentWillMount() {
    if(!this.props.countries.length) this.props.fetchCountries();
  }

  render() {
    return (
      <div>
        <h3>Countries</h3>
        {this.props.countries.map((e,i) => <div key={i}>{e.country}</div>)}
      </div>
    )
  }

}

export default Countries
