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

export const addImages = (images) => ({
  type: 'ADD_IMAGES',
  images,
})

export const addPriceDetails = (priceDetails) => ({
  type: 'ADD_PRICE_DETAILS',
  priceDetails,
})

export const addAvailability = (availability) => ({
  type: 'ADD_AVAILABILITY',
  availability,
})

export const saveOwnerDataInit = (ownerData) => ({
  type: 'SAVE_OWNER_DATA_INIT',
  ownerData,
})

export const saveOwnerDataSuccess = () => ({
  type: 'SAVE_OWNER_DATA_SUCCESS',
})

export const saveOwnerDataFail = () => ({
  type: 'SAVE_OWNER_DATA_FAIL',
})
