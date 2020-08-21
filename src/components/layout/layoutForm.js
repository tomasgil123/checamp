import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsOwnersForm } from 'src/utils/owners'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastStepNumber } from 'src/actions/owners'
import { getLastStepNumber } from 'src/reducers/owners'
import { PageNavigationContext } from 'src/context'
import styled from 'styled-components'
import { colors } from 'src/tokens'
import { motion, AnimatePresence } from 'framer-motion'

import Header from 'src/components/header'

const ProgressBar = styled.div`
  width: ${(props) => `${props.width}%`};
  position: relative;
  top: 0;
  left: 0;
  height: 4px;
  background: ${colors.base.primaryGreen};
  transition: width 0.5s;
  &:after {
    content: '';
    width: 100vw;
    height: 4px;
    background: #dfe4e7;
    position: absolute;
    z-index: -1;
  }
`

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: ${(props) => (`${props.overflowHidden}` ? `hidden` : `inherit`)};
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
  const [showContent, setShowContent] = React.useState(true)
  // eslint-disable-next-line no-undef
  const [widthProgressBar, setWidthProgressBar] = React.useState(0)

  useEffect(() => {
    const currentStepUrl = router.pathname
    const numberOfPages = stepsOwnersForm.length
    const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
    setWidthProgressBar(((currentStep.stepNumber + 1) / numberOfPages) * 100)
    setShowContent(true)
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
    setShowContent(false)
    setTimeout(function () {
      router.push({
        pathname: `/propietarios/${nextStep.url}`,
      })
    }, 300)
  }

  return (
    <Container overflowHidden={router.pathname.includes('caracteristicas-vehiculos-1')}>
      <Header isInForm />
      <ProgressBar width={widthProgressBar} />
      <AnimatePresence>
        {showContent && (
          <motion.div
            key={router.pathname}
            initial={{ x: '300px', opacity: 0 }}
            exit={{ x: '-300px', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <PageNavigationContext.Provider value={{ loading, goToNextStep }}>
              {children}
            </PageNavigationContext.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}
