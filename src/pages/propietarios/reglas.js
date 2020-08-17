import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Rules from 'src/components/owners/rules'

function RulesRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Reglas del vehiculo</h2>
        <Subtitle>Inidica que cosas se permiten hacer y cuales no con tu vehiculo</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Rules goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

RulesRV.layout = LayoutForm

export default RulesRV
