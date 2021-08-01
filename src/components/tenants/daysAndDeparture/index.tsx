import { connect } from 'react-redux'
import { addTenantDepartureDateAndNumberDays } from 'src/actions/tenants'
import { getDepartureDateAndNumberDays } from 'src/reducers/tenants'
import DaysAndDeparture from './daysAndDeparture'

const mapStateToProps = (state): any => {
  const { departureDate, numberDays } = getDepartureDateAndNumberDays(state)
  return {
    departureDate,
    numberDays,
  }
}

const mapDispatchToProps = (dispatch): any => ({
  addTenantDepartureDateAndNumberDays: (payload): any =>
    dispatch(addTenantDepartureDateAndNumberDays(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DaysAndDeparture)
