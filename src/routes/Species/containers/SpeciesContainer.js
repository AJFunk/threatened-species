import { connect } from 'react-redux'
import { actions } from '../modules/species'

import Species from '../components/Species'

const mapDispatchToProps = actions

const mapStateToProps = (state) => ({
  species: state.species
})

export default connect(mapStateToProps, mapDispatchToProps)(Species)
