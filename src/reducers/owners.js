/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect'
import produce from 'immer'

const initialState = {
  typeRV: '',
  lastStepNumber: 0,
  RVBrand: '',
  RVModel: '',
  RVManufactureDate: '',
  RVLenght: '',
  spaceForSleepers: 1,
  spaceForPassengers: 1,
  amenities: {},
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
        draft.RVLenght = action.lenght
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
    }
  })
}

const getOwnerssState = (state) => state.owners

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
