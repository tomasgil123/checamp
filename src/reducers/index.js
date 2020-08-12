import { combineReducers } from 'redux'
import owners from './owners'

// We combine the different reducers we are going to use

export default combineReducers({
  owners,
})
