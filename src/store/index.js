import { useMemo } from 'react'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'src/reducers'
import rootSaga from 'src/sagas'

let store

function initStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const storeInitialized = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  storeInitialized.sagaTask = sagaMiddleware.run(rootSaga)
  return storeInitialized
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  // eslint-disable-next-line no-shadow
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
