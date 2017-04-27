import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'

class Species extends Component {

  static propTypes = {
    species: PropTypes.object.isRequired,
    fetchSpecies: PropTypes.func.isRequired,
    fetchCitation: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.renderCountries = this.renderCountries.bind(this)
  }

  componentDidMount() {
    this.props.fetchSpecies(this.props.params.id)
    this.props.fetchCitation(this.props.params.id)
    this.props.fetchNarrative(this.props.params.id)
    this.props.fetchCountries(this.props.params.id)
    this.props.fetchHistorical(this.props.params.id)
    this.props.fetchThreats(this.props.params.id)
  }

  renderCountries() {
    const countries = this.props.species.countries.countries
    if(!countries) return
    return (
      <div>
        {countries.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

  render() {
    const species = this.props.species
    if(species.info.loading) return <Loading />
    return (
      <div>
        <h1>Species</h1>
        {Object.keys(species.info.info).map((e,i) =>
          <div key={i}>{e}: {species.info.info[e]}</div>
        )}
        <h3>Countries of Occurance</h3>
        {this.renderCountries()}
      </div>
    )
  }

}

export default Species
