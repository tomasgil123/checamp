/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'
import produce from 'immer'

const initialState = {
  email: '',
  phone: '',
  nameAndSurname: '',
  numberPeople: null,
  budget: '',
  departureDate: '',
  numberDays: null,
  loading: true,
  wasRequestSuccessfull: null,
  rvId: null,
}

export default function tenantsReducer(state = initialState, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      // eslint-disable-next-line no-undef
      case 'ADD_CONTACT_INFO_TENANT': {
        draft.email = action.contactInfo.email
        draft.phone = action.contactInfo.phone
        draft.nameAndSurname = action.contactInfo.nameAndSurname
        return draft
      }
      case 'ADD_PEOPLE_AND_BUDGET': {
        draft.numberPeople = action.payload.numberPeople
        draft.budget = action.payload.budget
        return draft
      }
      case 'ADD_DEPARTURE_DATE_AND_NUMBER_DAYS': {
        draft.departureDate = action.payload.departureDate
        draft.numberDays = action.payload.numberDays
        return draft
      }
      case 'SAVE_TENANT_DATA_INIT': {
        draft.loading = true
        return draft
      }
      case 'SAVE_TENANT_DATA_SUCCESS': {
        draft.loading = false
        draft.wasRequestSuccessfull = true
        return draft
      }
      case 'SAVE_TENANT_DATA_FAIL': {
        draft.loading = false
        draft.wasRequestSuccessfull = false
        return draft
      }
      case 'SAVE_TENANT_RV_ID': {
        draft.rvId = action.rvId
        return draft
      }
    }
  })
}

const getTenantssState = (state) => state.tenants

export const getAllTenantData = createSelector(getTenantssState, (tenantsState) => {
  const { loading, wasRequestSuccessfull, ...tenantData } = tenantsState
  return tenantData
})

export const isLoading = createSelector(getTenantssState, (tenantsState) => {
  return tenantsState.loading
})

export const resultRequest = createSelector(getTenantssState, (tenantsState) => {
  return tenantsState.wasRequestSuccessfull
})

export const getContactInfo = createSelector(getTenantssState, (tenantsState) => {
  return {
    email: tenantsState.email,
    phone: tenantsState.phone,
    nameAndSurname: tenantsState.nameAndSurname,
  }
})

export const getPeopleAndBudget = createSelector(getTenantssState, (tenantsState) => {
  return {
    numberPeople: tenantsState.numberPeople,
    budget: tenantsState.budget,
  }
})

export const getDepartureDateAndNumberDays = createSelector(getTenantssState, (tenantsState) => {
  return {
    departureDate: tenantsState.departureDate,
    numberDays: tenantsState.numberDays,
  }
})
