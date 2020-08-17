import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import { Container, ContainerTitle } from 'src/components/owners/general'
import RVOptions from 'src/components/owners/RVOptions'
import LayoutForm from 'src/components/layout/layoutForm'

function TypeRV() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitle>
        <h2>Indica tu tipo de vehiculo</h2>
      </ContainerTitle>
      <RVOptions goToNextStep={goToNextStep} />
    </Container>
  )
}

TypeRV.layout = LayoutForm

export default TypeRV
