import { connect } from 'react-redux'
import { addTenantContactInfo } from 'src/actions/tenants'
import { getContactInfo } from 'src/reducers/tenants'
import ContactInfoDetails from './contactInfoDetails'

const mapStateToProps = (state) => {
  return {
    contactInfo: getContactInfo(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContactInfo: (details) => dispatch(addTenantContactInfo(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoDetails)
