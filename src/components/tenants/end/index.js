import { connect } from 'react-redux'
import { saveTenantDataInit } from 'src/actions/tenants'
import { getAllTenantData, resultRequest, isLoading } from 'src/reducers/tenants'
import End from './end'

const mapStateToProps = (state) => {
  return {
    tenantData: getAllTenantData(state),
    resultRequest: resultRequest(state),
    isLoading: isLoading(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveTenantDataInit: (tenantData) => dispatch(saveTenantDataInit(tenantData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(End)
