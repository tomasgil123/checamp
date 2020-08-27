/* eslint-disable import/prefer-default-export */
export const addTenantContactInfo = (contactInfo) => ({
  type: 'ADD_CONTACT_INFO_TENTANT',
  contactInfo,
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
