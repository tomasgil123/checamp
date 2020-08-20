import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Availability from 'src/components/owners/availability'

function AvailabilityRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <ContainerTitle>
        <h2>Disponibilidad</h2>
        <Subtitle>
          Contanos cuando (que meses o que semanas del ano) podrias alquilar tu motor home y cuando
          no
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Availability goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

AvailabilityRV.layout = LayoutForm

export default AvailabilityRV
