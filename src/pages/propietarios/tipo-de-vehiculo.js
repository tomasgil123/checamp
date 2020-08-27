import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'
import styled from 'styled-components'

import { Container, ContainerTitle, ContainerHelpCard } from 'src/components/owners/general'
import TypeRVOptions from 'src/components/owners/typeRVOptions'
import LayoutForm from 'src/components/layout/layoutForm'
import HelpCard from 'src/components/forms/helpCard'

const ContainerTitleTypeRV = styled(ContainerTitle)`
  text-align: center;
`

function TypeRV() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitleTypeRV>
        <h2>Indica tu tipo de vehiculo</h2>
      </ContainerTitleTypeRV>
      <TypeRVOptions goToNextStep={goToNextStep} />
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
