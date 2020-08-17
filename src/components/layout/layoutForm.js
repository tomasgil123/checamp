import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsOwnersForm } from 'src/utils/owners'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastStepNumber } from 'src/actions/owners'
import { getLastStepNumber } from 'src/reducers/owners'
import { PageNavigationContext } from 'src/context'
import styled from 'styled-components'

import Header from 'src/components/header'

const ProgressBar = styled.div`
  width: ${(props) => `${props.width}%`};
  position: relative;
  top: 0;
  left: 0;
  height: 4px;
  background: #246b62;
  transition: width 0.5s;
`

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const lastStepNumber = useSelector(getLastStepNumber)

  // For some reason useState only works here if React is undefined
  // if we import React it breaks

  // eslint-disable-next-line no-undef
  const [loading, setLoading] = React.useState(true)
  // eslint-disable-next-line no-undef
  const [widthProgressBar, setWidthProgressBar] = React.useState(0)

  useEffect(() => {
    const currentStepUrl = router.pathname
    const numberOfPages = stepsOwnersForm.length
    const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
    setWidthProgressBar(((currentStep.stepNumber + 1) / numberOfPages) * 100)
  }, [router.pathname])

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
      <ProgressBar width={widthProgressBar} />
      <PageNavigationContext.Provider value={{ loading, goToNextStep }}>
        {children}
      </PageNavigationContext.Provider>
    </div>
  )
}
