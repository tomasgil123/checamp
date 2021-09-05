/* eslint-disable import/prefer-default-export */
export const addTenantContactInfo = (contactInfo) => ({
  type: 'ADD_CONTACT_INFO_TENANT',
  contactInfo,
})

export const addTenantNumberPeopleAndBudget = (payload) => ({
  type: 'ADD_PEOPLE_AND_BUDGET',
  payload,
})

export const addTenantDepartureDateAndNumberDays = (payload) => ({
  type: 'ADD_DEPARTURE_DATE_AND_NUMBER_DAYS',
  payload,
})

export const saveTenantDataInit = (tenantData) => ({
  type: 'SAVE_TENANT_DATA_INIT',
  tenantData,
})

export const saveTenantDataSuccess = () => ({
  type: 'SAVE_TENANT_DATA_SUCCESS',
})

export const saveTenantDataFail = () => ({
  type: 'SAVE_TENANT_DATA_FAIL',
})

export const saveTenantRvId = (rvId) => {
  return {
    type: 'SAVE_TENANT_RV_ID',
    rvId,
  }
}
