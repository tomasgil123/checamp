import { connect } from 'react-redux'
import { addAvailability } from 'src/actions/owners'
import { getAvailability } from 'src/reducers/owners'
import Availability from './availability'

const mapStateToProps = (state) => {
  return {
    availability: getAvailability(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAvailability: (details) => dispatch(addAvailability(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Availability)
