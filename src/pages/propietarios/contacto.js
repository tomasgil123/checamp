import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerLoader,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Contact from 'src/components/owners/contact'
import Loader from 'src/components/primitives/loader'

function ContactInfoOwner() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return (
      <Container>
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      </Container>
    )
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Tu informacion de contacto</h2>
        <Subtitle>
          Vamos a necesitar tu nombre, un mail y un número de celular para avisarte cuando alguien
          quiera alquilar tu motorhome. Nunca va a ser compartido con terceros sin tu
          autorización
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Contact goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

ContactInfoOwner.layout = LayoutForm

export default ContactInfoOwner
