import { createSelector } from 'reselect'
import produce from 'immer'

const initialState = {
  typeRV: '',
  lastStepNumber: 0,
}

export default function ownersReducer(state = initialState, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      // eslint-disable-next-line no-undef
      case 'ADD_TYPE_RV': {
        // eslint-disable-next-line no-param-reassign
        draft.typeRV = action.typeRV
        return draft
      }
      case 'CHANGE_LAST_STEP_NUMBER': {
        // eslint-disable-next-line no-param-reassign
        draft.lastStepNumber = action.lastStepNumber
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
