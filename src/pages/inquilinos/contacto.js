import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import { Container, ContainerTitle, ContainerFeatures } from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutFormTenant'
import Contact from 'src/components/tenants/contact'

function ContactInfoTenant() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitle>
        <h2 className="text-lg pb-4">Tu información de contacto</h2>
      </ContainerTitle>
      <ContainerFeatures>
        <Contact goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

ContactInfoTenant.layout = LayoutForm

export default ContactInfoTenant
