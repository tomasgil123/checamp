import { connect } from 'react-redux'
import { addTypeOfRV } from 'src/actions/owners'
import TypeRVOptions from './typeRVOptions'

const mapStateToProps = (state) => {
  return {
    typeRV: state.owners.typeRV,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTypeOfRV: (typeRV) => dispatch(addTypeOfRV(typeRV)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeRVOptions)
