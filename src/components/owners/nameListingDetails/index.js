import { connect } from 'react-redux'
import { addNameListing } from 'src/actions/owners'
import { getNameListing } from 'src/reducers/owners'
import NameListingDetails from './nameListingDetails'

const mapStateToProps = (state) => {
  return {
    nameListing: getNameListing(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNameListing: (details) => dispatch(addNameListing(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NameListingDetails)
