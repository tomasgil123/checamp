import { connect } from 'react-redux'
import { saveOwnerDataInit } from 'src/actions/owners'
import { getAllOwnerData, resultRequest, isLoading } from 'src/reducers/owners'
import End from './end'

const mapStateToProps = (state) => {
  return {
    ownerData: getAllOwnerData(state),
    resultRequest: resultRequest(state),
    isLoading: isLoading(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveOwnerDataInit: (ownerData) => dispatch(saveOwnerDataInit(ownerData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(End)
