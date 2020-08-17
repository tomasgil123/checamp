import { connect } from 'react-redux'
import { addContactInfo } from 'src/actions/owners'
import { getContactInfo } from 'src/reducers/owners'
import ContactInfoDetails from './contactInfoDetails'

const mapStateToProps = (state) => {
  return {
    contactInfo: getContactInfo(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContactInfo: (details) => dispatch(addContactInfo(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoDetails)
