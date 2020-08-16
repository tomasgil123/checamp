// eslint-disable-next-line import/prefer-default-export
export const addTypeOfRV = (typeRV) => ({
  type: 'ADD_TYPE_RV',
  typeRV,
})

export const changeLastStepNumber = (lastStepNumber) => ({
  type: 'CHANGE_LAST_STEP_NUMBER',
  lastStepNumber,
})

export const addFeatures = (brand, model, year, lenght) => ({
  type: 'ADD_FEATURES',
  brand,
  model,
  year,
  lenght,
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

export const addPickupAddressDetails = (pickupAddressDetails) => ({
  type: 'ADD_PICKUP_ADDRESS_DETAILS',
  pickupAddressDetails,
})

export const addNameListing = (nameListing) => ({
  type: 'ADD_NAME_LISTING',
  nameListing,
})
