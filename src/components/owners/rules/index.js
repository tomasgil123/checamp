import { connect } from 'react-redux'
import { addRules } from 'src/actions/owners'
import { getRules } from 'src/reducers/owners'
import Rules from './rules'

const mapStateToProps = (state) => {
  return {
    rules: getRules(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRules: (rules) => dispatch(addRules(rules)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Rules)
