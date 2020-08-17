// eslint-disable-next-line import/prefer-default-export
export const addTypeOfRV = (typeRV) => ({
  type: 'ADD_TYPE_RV',
  typeRV,
})

export const changeLastStepNumber = (lastStepNumber) => ({
  type: 'CHANGE_LAST_STEP_NUMBER',
  lastStepNumber,
})

export const addFeatures = (brand, model, year, length) => ({
  type: 'ADD_FEATURES',
  brand,
  model,
  year,
  length,
})

export const addSpace = (sleepers, passengers) => ({
  type: 'ADD_SPACE',
  sleepers,
  passengers,
})

export const addAmenities = (amenities) => ({
  type: 'ADD_AMENITIES',
  amenities,
})

export const addRules = (rules) => ({
  type: 'ADD_RULES',
  rules,
})

export const addPickupAddressDetails = (details) => {
  return {
    type: 'ADD_PICKUP_ADDRESS_DETAILS',
    details,
  }
}

export const addNameListing = (nameListing) => ({
  type: 'ADD_NAME_LISTING',
  nameListing,
})

export const addDescriptionListing = (descriptionListing) => ({
  type: 'ADD_DESCRIPTION_LISTING',
  descriptionListing,
})

export const addContactInfo = (contactInfo) => ({
  type: 'ADD_CONTACT_INFO',
  contactInfo,
})
