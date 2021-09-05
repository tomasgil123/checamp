import { useContext, FC, useEffect, useState } from 'react'
import { PageNavigationContext } from 'src/context'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
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
  const goToLast = (): void => {
    router.push({
      pathname: `/inquilinos/fin`,
    })
  }
  const [userAlreadyCompletedForm, setUserAlreadyCompletedForm] = useState(false)
  const numberDays = useSelector((state) => state.tenants.numberDays)
  const numberPeople = useSelector((state) => state.tenants.numberPeople)
  const departureDate = useSelector((state) => state.tenants.departureDate)
  const phone = useSelector((state) => state.tenants.phone)
  const email = useSelector((state) => state.tenants.email)
  useEffect(() => {
    if (numberDays && numberPeople && departureDate && phone && email) {
      setUserAlreadyCompletedForm(true)
    }
  }, [])
  return (
    <Container>
      {userAlreadyCompletedForm ? (
        <div>
          <ContainerButton>
            <MainButton text="Enviar consulta" onClickButton={goToLast} />
          </ContainerButton>
        </div>
      ) : (
        <div>
          <h2 className="text-center pb-4">
            Para poder ayudarte te vamos a hacer algunas preguntas
          </h2>
          <ContainerButton>
            <MainButton text="Entendido" onClickButton={goToNextStep} />
          </ContainerButton>
        </div>
      )}
    </Container>
  )
}

;(Intro as PageWithLayout<any>).layout = LayoutForm

export default Intro
