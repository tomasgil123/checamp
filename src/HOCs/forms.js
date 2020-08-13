import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsOwnersForm } from 'src/utils/owners'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastStepNumber } from 'src/actions/owners'
import { getLastStepNumber } from 'src/reducers/owners'
import hoistNonReactStatics from 'hoist-non-react-statics'

// We want all pages to be able to handle route validation and also to know which is
// the next step the user should be taken

// eslint-disable-next-line import/prefer-default-export
export function withRouteValidationAndNavigation(WrappedComponent) {
  // eslint-disable-next-line func-names
  return function () {
    const router = useRouter()
    const dispatch = useDispatch()
    const lastStep = useSelector(getLastStepNumber)
    let currentStep

    console.log('withRouteValidationAndNavigation')

    useEffect(() => {
      if (window) {
        const currentStepUrl = router.pathname

        currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))

        if (currentStep.stepNumber - 1 !== lastStep.stepNumber) {
          router.push({
            pathname: `/propietarios/${lastStep.url}`,
          })
        }
      }
    }, [])

    const goToNextStep = () => {
      const nextStep = stepsOwnersForm.find(
        (step) => step.stepNumber === currentStep.stepNumber + 1
      )
      dispatch(changeLastStepNumber(currentStep.stepNumber))
      router.push({
        pathname: `/propietarios/${nextStep.url}`,
      })
    }

    return <WrappedComponent goToNextStep={goToNextStep} />
  }
}
