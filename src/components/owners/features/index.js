import { connect } from 'react-redux'
import { addFeatures } from 'src/actions/owners'
import { getFeatures } from 'src/reducers/owners'
import Features from './features'

const mapStateToProps = (state) => {
  return {
    features: getFeatures(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addFeatures: (brand, model, year, lenght) => dispatch(addFeatures(brand, model, year, lenght)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Features)
