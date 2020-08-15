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
