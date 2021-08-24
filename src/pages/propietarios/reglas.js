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
import Rules from 'src/components/owners/rules'
import Loader from 'src/components/primitives/loader'

function RulesRV() {
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
        <h2>Reglas del vehículo</h2>
        <Subtitle>¿Que cosas se pueden hacer y cuáles no con tu vehículo?</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Rules goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

RulesRV.layout = LayoutForm

export default RulesRV
