import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from 'src/store'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/prop-types
  const store = useStore(pageProps.initialReduxState)

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
