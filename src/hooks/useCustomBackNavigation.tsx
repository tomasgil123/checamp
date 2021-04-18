/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

/**
 * Support for customising what happens when the user clicks the back button.
 *
 * next/router lets us listen to popstate and do something before the router acts on it with beforePopState.
 * passing a callback which returns false we avoid navigating backwards, but there is a problem: the url looks like the page
 * the user would have been taken to. For example, if our current page is /page2.html and our previuos page is /page1.html
 * after triggering the callback the url will llok like page1.html. This could confuse the user.
 * In order to avoid this, we trigger window.history.pushState to make the url look correctly.
 *
 * @param customBackNavigationFunctionality The functionality we wnat to trigger instead of navigating backwards.
 */

const useCustomBackNavigation = (customBackNavigationFunctionality: () => void) => {
  const router = useRouter()

  const currentLocation = useRef(`${window.location.pathname}${window.location.search}`)

  useEffect(() => {
    router.beforePopState(() => {
      customBackNavigationFunctionality()
      history.scrollRestoration = 'manual'
      window.history.pushState({}, '', currentLocation.current)
      return false
    })
    return (): void => {
      router.beforePopState(() => {
        history.scrollRestoration = 'auto'
        return true
      })
    }
  }, [])
}

export default useCustomBackNavigation
