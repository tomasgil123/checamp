import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import { Container, ContainerTitle, ContainerHelpCard } from 'src/components/owners/general'
import RVOptions from 'src/components/owners/RVOptions'
import LayoutForm from 'src/components/layout/layoutForm'
import HelpCard from 'src/components/forms/helpCard'

function TypeRV() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitle>
        <h2>Indica tu tipo de vehiculo</h2>
      </ContainerTitle>
      <RVOptions goToNextStep={goToNextStep} />
      <ContainerHelpCard>
        <HelpCard
          title="Consejo"
          body="Tenes una consulta? Contactanos por whatsapp al 11-5621-7620"
        />
      </ContainerHelpCard>
    </Container>
  )
}

TypeRV.layout = LayoutForm

export default TypeRV
