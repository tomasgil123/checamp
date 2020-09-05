import { combineReducers } from 'redux'
import owners from './owners'
import tenants from './tenants'

// We combine the different reducers we are going to use

export default combineReducers({
  owners,
  tenants,
})
