import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from 'src/store'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/prop-types
  const store = useStore(pageProps.initialReduxState)

  const Layout = Component.layout || ((children) => <>{children}</>)

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
