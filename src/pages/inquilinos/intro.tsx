import { useContext, FC, useEffect } from 'react'
import { PageNavigationContext } from 'src/context'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
// actions
import { saveTenantRvId } from 'src/actions/tenants'
// components
import { Container } from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutFormTenant'
import MainButton from 'src/components/primitives/mainButton'
import { ContainerButton } from 'src/components/owners/general'
// types
import PageWithLayout from 'src/types/pageWithLayout'

const Intro: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const rvId = router.query?.rvId
  const { goToNextStep } = useContext(PageNavigationContext)
  useEffect(() => {
    dispatch(saveTenantRvId(rvId))
  }, [])
  return (
    <Container>
      <h2 className="text-center pb-4">Para poder ayudarte te vamos a hacer algunas preguntas</h2>
      <ContainerButton>
        <MainButton text="Siguiente" onClickButton={goToNextStep} />
      </ContainerButton>
    </Container>
  )
}

;(Intro as PageWithLayout<any>).layout = LayoutForm

export default Intro
