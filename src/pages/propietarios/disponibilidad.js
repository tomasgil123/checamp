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
import Availability from 'src/components/owners/availability'
import Loader from 'src/components/primitives/loader'

function AvailabilityRV() {
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
        <h2>Disponibilidad</h2>
        <Subtitle>
          Contanos cuándo (qué meses o que semanas del año) podrías alquilar tu motorhome o
          cuándo no.
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
