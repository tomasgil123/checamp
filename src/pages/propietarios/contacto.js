import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Contact from 'src/components/owners/contact'

function ContactInfoOwner() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Tu informacion de contacto</h2>
        <Subtitle>
          Vamos a necesitar un mail y un numero de celular para avisarte cuando alguien quiera
          alquilar tu motor home. Nunca va a ser compartido con terceros sin tu autorizacion
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
