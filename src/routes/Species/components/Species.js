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
    this.props.fetchCountries(this.props.params.id)
    this.props.fetchNarrative(this.props.params.id)
    this.props.fetchThreats(this.props.params.id)
    this.props.fetchHistorical(this.props.params.id)
    this.props.fetchCitation(this.props.params.id)
  }

  renderCountries() {
    const countries = this.props.species.countries
    if(countries.loading) return <Loading />
    if(countries.failed) return <h1>FAILED</h1>
    if(!countries.countries.length) return <h1>NO COUNTRIES FOUND</h1>
    return (
      <div className='countries'>
        {countries.countries.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

  renderNarrative() {
    const narrative = this.props.species.narrative
    if(narrative.loading) return <Loading />
    if(narrative.failed) return <h1>FAILED</h1>
    if(!narrative.narrative.length) return <h1>NO NARRATIVE FOUND</h1>
    return (
      <div className='narratives'>
        {narrative.narrative.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

  renderThreats() {
    const threats = this.props.species.threats
    if(threats.loading) return <Loading />
    if(threats.failed) return <h1>FAILED</h1>
    if(!threats.threats.length) return <h1>NO THREATS FOUND</h1>
    return (
      <div className='threats'>
        {threats.threats.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

  renderHistorical() {
    const historical = this.props.species.historical
    if(historical.loading) return <Loading />
    if(historical.failed) return <h1>FAILED</h1>
    if(!historical.historical.length) return <h1>NO HISTORICAL FOUND</h1>
    return (
      <div className='historical'>
        {historical.historical.map((e,i,a) =>
          Object.keys(e).map((x,y) =>
            <div key={`${e}-${x}`}>{x}: {e[x]}</div>
          )
        )}
      </div>
    )
  }

  renderCitation() {
    const citation = this.props.species.citation
    if(citation.loading) return <Loading />
    if(citation.failed) return <h1>FAILED</h1>
    if(!citation.citation.length) return <h1>NO CITATIONS FOUND</h1>
    return (
      <div className='citation'>
        {citation.citation.map((e,i,a) =>
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
        <h3>Threats</h3>
        {this.renderThreats()}
        <h3>Narrative</h3>
        {this.renderNarrative()}
        <h3>Historical</h3>
        {this.renderHistorical()}
        <h3>Citation</h3>
        {this.renderCitation()}
      </div>
    )
  }

}

export default Species
