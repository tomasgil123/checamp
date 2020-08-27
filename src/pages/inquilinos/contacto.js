import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutFormTenant'
import Contact from 'src/components/tenants/contact'

function ContactInfoTenant() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitle>
        <h2>Tu informacion de contacto</h2>
        <Subtitle>Vamos a necesitar un mail y un numero de celular</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Contact goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

ContactInfoTenant.layout = LayoutForm

export default ContactInfoTenant
