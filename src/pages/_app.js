import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'react-image-lightbox/style.css'

import { Provider } from 'react-redux'
import { useStore } from 'src/store'
import React from 'react'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/prop-types
  const store = useStore(pageProps.initialReduxState)

  const Layout = Component.layout ? Component.layout : React.Fragment

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
