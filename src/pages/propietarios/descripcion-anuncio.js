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
import DescriptionListingDetails from 'src/components/owners/descriptionListingDetails'
import Loader from 'src/components/primitives/loader'

function DescriptionListingRV() {
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
        <h2>Descripción de tu anuncio</h2>
        <Subtitle>
          Contanos qué hace a tu motorhome diferente. Esta información va a poder ser leída por
          potenciales huéspedes
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <DescriptionListingDetails goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

DescriptionListingRV.layout = LayoutForm

export default DescriptionListingRV
