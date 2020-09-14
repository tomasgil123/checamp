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
        <h2>Tu información de contacto</h2>
        <Subtitle>
          Nos estamos preparando para que puedas vivir una experiencia en Casa Rodante en Argentina
          cuando se levanten las restricciones. Déjanos tus datos para que podamos contactarnos y
          brindarte la mejor atención
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Contact goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

ContactInfoTenant.layout = LayoutForm

export default ContactInfoTenant
