import { connect } from 'react-redux'
import { addTypeOfRV } from 'src/actions/owners'
import RVOptions from './RVOptions'

const mapStateToProps = (state) => {
  return {
    typeRV: state.owners.typeRV,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTypeOfRV: (typeRV) => dispatch(addTypeOfRV(typeRV)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RVOptions)
