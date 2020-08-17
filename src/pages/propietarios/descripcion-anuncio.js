import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import DescriptionListingDetails from 'src/components/owners/descriptionListingDetails'

function DescriptionListingRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Descripcion de tu anuncio</h2>
        <Subtitle>
          Contanos que hace a tu RV diferente. Esta informacion va a poder ser leida por potenciales
          huespedes mientras buscan alquilar un RV
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
