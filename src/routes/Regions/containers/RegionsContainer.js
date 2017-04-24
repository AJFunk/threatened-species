import { connect } from 'react-redux'
import {
  fetchRegions
} from '../modules/regions'

import Regions from '../components/Regions'

const mapDispatchToProps = {
  fetchRegions
}

const mapStateToProps = (state) => ({
  regions: state.regions
})

export default connect(mapStateToProps, mapDispatchToProps)(Regions)
