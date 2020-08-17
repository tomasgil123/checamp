import { createContext } from 'react'

const navigation = {
  goToNextStep: () => {},
}

// eslint-disable-next-line import/prefer-default-export
export const PageNavigationContext = createContext(navigation)
