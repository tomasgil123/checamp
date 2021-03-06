/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'
import produce from 'immer'
import { flattenObject } from 'src/utils/general'

const initialState = {
  typeRV: '',
  lastStepNumber: -1,
  RVBrand: '',
  RVModel: '',
  RVManufactureDate: '',
  RVLength: '',
  spaceForSleepers: 1,
  spaceForPassengers: 1,
  amenities: {},
  rules: {},
  pickupAddress: '',
  city: '',
  nameListing: '',
  descriptionListing: '',
  email: '',
  phone: '',
  nameAndSurname: '',
  images: [],
  pricePerDay: '',
  priceExtra: '',
  availability: '',
  loading: true,
  wasRequestSuccessfull: null,
}

export default function ownersReducer(state = initialState, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      // eslint-disable-next-line no-undef
      case 'ADD_TYPE_RV': {
        draft.typeRV = action.typeRV
        return draft
      }
      case 'CHANGE_LAST_STEP_NUMBER': {
        draft.lastStepNumber = action.lastStepNumber
        return draft
      }
      case 'ADD_FEATURES': {
        draft.RVBrand = action.brand
        draft.RVModel = action.model
        draft.RVManufactureDate = action.year
        draft.RVLength = action.length
        return draft
      }
      case 'ADD_SPACE': {
        draft.spaceForSleepers = action.sleepers
        draft.spaceForPassengers = action.passengers
        return draft
      }
      case 'ADD_AMENITIES': {
        draft.amenities = action.amenities
        return draft
      }
      case 'ADD_RULES': {
        draft.rules = action.rules
        return draft
      }
      case 'ADD_PICKUP_ADDRESS_DETAILS': {
        draft.pickupAddress = action.details.pickupAddress
        draft.city = action.details.city
        return draft
      }
      case 'ADD_NAME_LISTING': {
        draft.nameListing = action.nameListing
        return draft
      }
      case 'ADD_DESCRIPTION_LISTING': {
        draft.descriptionListing = action.descriptionListing
        return draft
      }
      case 'ADD_CONTACT_INFO': {
        draft.email = action.contactInfo.email
        draft.phone = action.contactInfo.phone
        draft.nameAndSurname = action.contactInfo.nameAndSurname
        return draft
      }
      case 'ADD_IMAGES': {
        draft.images = [...draft.images, action.images]
        return draft
      }
      case 'ADD_PRICE_DETAILS': {
        draft.pricePerDay = action.priceDetails.pricePerDay
        draft.priceExtra = action.priceDetails.priceExtra
        return draft
      }
      case 'ADD_AVAILABILITY': {
        draft.availability = action.availability
        return draft
      }
      case 'SAVE_OWNER_DATA_INIT': {
        draft.loading = true
        return draft
      }
      case 'SAVE_OWNER_DATA_SUCCESS': {
        draft.loading = false
        draft.wasRequestSuccessfull = true
        return draft
      }
      case 'SAVE_OWNER_DATA_FAIL': {
        draft.loading = false
        draft.wasRequestSuccessfull = false
        return draft
      }
    }
  })
}

const getOwnerssState = (state) => state.owners

export const getAllOwnerData = createSelector(getOwnerssState, (ownersState) => {
  const { loading, wasRequestSuccessfull, lastStepNumber, images, ...ownerData } = ownersState
  const flattenOwnerData = flattenObject(ownerData)
  flattenOwnerData.images = images.join(',')
  return flattenOwnerData
})

export const isLoading = createSelector(getOwnerssState, (ownersState) => {
  return ownersState.loading
})

export const resultRequest = createSelector(getOwnerssState, (ownersState) => {
  return ownersState.wasRequestSuccessfull
})

export const getTypeRV = createSelector(getOwnerssState, (ownersState) => {
  return ownersState.typeRV
})

export const getLastStepNumber = createSelector(getOwnerssState, (ownersState) => {
  return ownersState.lastStepNumber
})

export const getFeatures = createSelector(getOwnerssState, (ownersState) => {
  return {
    brand: ownersState.RVBrand,
    model: ownersState.RVModel,
    year: ownersState.RVManufactureDate,
    length: ownersState.RVLength,
  }
})

export const getSpace = createSelector(getOwnerssState, (ownersState) => {
  return {
    sleepers: ownersState.spaceForSleepers,
    passengers: ownersState.spaceForPassengers,
  }
})

export const getAmenities = createSelector(getOwnerssState, (ownersState) => {
  return {
    amenities: ownersState.amenities,
  }
})

export const getRules = createSelector(getOwnerssState, (ownersState) => {
  return {
    rules: ownersState.rules,
  }
})

export const getPickupAddressDetails = createSelector(getOwnerssState, (ownersState) => {
  return {
    pickupAddress: ownersState.pickupAddress,
    city: ownersState.city,
  }
})

export const getNameListing = createSelector(getOwnerssState, (ownersState) => {
  return {
    nameListing: ownersState.nameListing,
  }
})

export const getDescriptionListing = createSelector(getOwnerssState, (ownersState) => {
  return {
    descriptionListing: ownersState.descriptionListing,
  }
})

export const getContactInfo = createSelector(getOwnerssState, (ownersState) => {
  return {
    email: ownersState.email,
    phone: ownersState.phone,
    nameAndSurname: ownersState.nameAndSurname,
  }
})

export const getImages = createSelector(getOwnerssState, (ownersState) => {
  return {
    images: ownersState.images,
  }
})

export const getPriceDetails = createSelector(getOwnerssState, (ownersState) => {
  return {
    pricePerDay: ownersState.pricePerDay,
    priceExtra: ownersState.priceExtra,
  }
})

export const getAvailability = createSelector(getOwnerssState, (ownersState) => {
  return ownersState.availability
})
