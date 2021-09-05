import { connect } from 'react-redux'
import { addTenantNumberPeopleAndBudget } from 'src/actions/tenants'
import { getPeopleAndBudget } from 'src/reducers/tenants'
import PeopleAndDepartureDay from './peopleAndBudget'

const mapStateToProps = (state): any => {
  const { numberPeople, budget } = getPeopleAndBudget(state)
  return {
    numberPeople,
    budget,
  }
}

const mapDispatchToProps = (dispatch): any => ({
  addTenantNumberPeopleAndBudget: (payload): any =>
    dispatch(addTenantNumberPeopleAndBudget(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleAndDepartureDay)
