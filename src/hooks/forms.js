import { useRouter } from 'next/router'
import { stepsOwnersForm } from 'src/utils/owners'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastStepNumber } from 'src/actions/owners'
import { getLastStepNumber } from 'src/reducers/owners'

// eslint-disable-next-line import/prefer-default-export
export function useStepFormValidation() {
  // We want avoid the user missing form steps so we check if the last step number in the store
  // is actually the step before the current step the user is in
  const router = useRouter()
  const currentStepUrl = router.pathname

  const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
  const lastStep = useSelector(getLastStepNumber)

  if (currentStep.stepNumber - 1 !== lastStep.stepNumber) {
    router.push({
      pathname: `/propietarios/${lastStep.url}`,
    })
  }
}

export function useGoToNextStep() {
  // When user moves to next step we set the actual step number as thelast step number
  // and we redirect the user to the next step url
  const router = useRouter()
  const dispatch = useDispatch()
  const currentStepUrl = router.pathname

  const currentStep = stepsOwnersForm.find((step) => currentStepUrl.includes(step.url))
  const nextStep = stepsOwnersForm.find((step) => step.stepNumber === currentStep.stepNumber + 1)

  dispatch(changeLastStepNumber(currentStep.stepNumber))
  router.push({
    pathname: `/propietarios/${nextStep.url}`,
  })
}
