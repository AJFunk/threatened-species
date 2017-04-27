import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'
import SpeciesCitation from './SpeciesCitation'
import SpeciesCountries from './SpeciesCountries'
import SpeciesInfo from './SpeciesInfo'
import SpeciesHistorical from './SpeciesHistorical'
import SpeciesNarrative from './SpeciesNarrative'
import SpeciesThreats from './SpeciesThreats'

class Species extends Component {

  static propTypes = {
    species: PropTypes.object.isRequired,
    fetchSpecies: PropTypes.func.isRequired,
    fetchCitation: PropTypes.func.isRequired
  }

  constructor() {
    super()
  }

  componentDidMount() {
    const id = this.props.params.id
    this.props.fetchSpecies(id)
    this.props.fetchCountries(id)
    this.props.fetchNarrative(id)
    this.props.fetchThreats(id)
    this.props.fetchHistorical(id)
    this.props.fetchCitation(id)
  }

  render() {
    const species = this.props.species
    if(species.info.loading) return <Loading />
    return (
      <div>
        <SpeciesInfo info={species.info} />
        <SpeciesCountries countries={species.countries}/>
        <SpeciesNarrative narrative={species.narrative}/>
        <SpeciesThreats threats={species.threats}/>
        <SpeciesHistorical historical={species.historical}/>
        <SpeciesCitation citation={species.citation}/>
      </div>
    )
  }

}

export default Species
