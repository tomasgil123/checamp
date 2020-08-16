import { connect } from 'react-redux'
import { addSpace, addAmenities } from 'src/actions/owners'
import { getSpace, getAmenities } from 'src/reducers/owners'
import Amenities from './amenities'

const mapStateToProps = (state) => {
  return {
    spaceRV: getSpace(state),
    amenities: getAmenities(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSpace: (sleepers, passegners) => dispatch(addSpace(sleepers, passegners)),
  addAmenities: (amenities) => dispatch(addAmenities(amenities)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Amenities)
