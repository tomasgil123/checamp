import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsOwnersForm } from 'src/utils/owners'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastStepNumber } from 'src/actions/owners'
import { getLastStepNumber } from 'src/reducers/owners'
import { PageNavigationContext } from 'src/context'

import Header from 'src/components/header'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const lastStepNumber = useSelector(getLastStepNumber)

  // For some reason useState only works here if React is undefined
  // if we import React it breaks

  // eslint-disable-next-line no-undef
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    if (window) {
      const currentStepUrl = router.pathname

      const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
      const lastStep = stepsOwnersForm.find((step) => lastStepNumber === step.stepNumber)
        ? stepsOwnersForm.find((step) => lastStepNumber === step.stepNumber)
        : stepsOwnersForm[0]

      if (!(currentStep === 0)) {
        if (currentStep.stepNumber - 1 !== lastStepNumber) {
          router.push({
            pathname: `/propietarios/${lastStep.url}`,
          })
          return
        }
      }
      setLoading(false)
    }
  }, [])

  const goToNextStep = () => {
    const currentStepUrl = router.pathname
    const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
    const nextStep = stepsOwnersForm.find((step) => step.stepNumber === currentStep.stepNumber + 1)
    dispatch(changeLastStepNumber(currentStep.stepNumber))
    setLoading(false)
    router.push({
      pathname: `/propietarios/${nextStep.url}`,
    })
  }

  return (
    <div>
      <Header />
      <PageNavigationContext.Provider value={{ loading, goToNextStep }}>
        {children}
      </PageNavigationContext.Provider>
    </div>
  )
}
