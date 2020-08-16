import { connect } from 'react-redux'
import { addPickupAddressDetails } from 'src/actions/owners'
import { getPickupAddressDetails } from 'src/reducers/owners'
import PickupAddressDetails from './pickupAddressDetails'

const mapStateToProps = (state) => {
  return {
    pickupAddressDetails: getPickupAddressDetails(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPickupAddressDetails: (details) => dispatch(addPickupAddressDetails(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PickupAddressDetails)
