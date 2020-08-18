import { connect } from 'react-redux'
import { addPriceDetails } from 'src/actions/owners'
import { getPriceDetails } from 'src/reducers/owners'
import Price from './price'

const mapStateToProps = (state) => {
  return {
    priceDetails: getPriceDetails(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPriceDetails: (details) => dispatch(addPriceDetails(details)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Price)
