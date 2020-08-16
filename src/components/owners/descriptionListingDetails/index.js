import { connect } from 'react-redux'
import { addDescriptionListing } from 'src/actions/owners'
import { getDescriptionListing } from 'src/reducers/owners'
import DescriptionListingDetails from './descriptionListingDetails'

const mapStateToProps = (state) => {
  return {
    descriptionListing: getDescriptionListing(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDescriptionListing: (details) => dispatch(addDescriptionListing(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionListingDetails)
