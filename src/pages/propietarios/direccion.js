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
import PickupAddressDetails from 'src/components/owners/pickupAddressDetails'
import Loader from 'src/components/primitives/loader'

function PickupAddressDetailsRV() {
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
        <h2>Dirección</h2>
        <Subtitle>
          Contanos por dónde tendrían que pasar los huéspedes a buscar tu motorhome al momento de
          alquilarla
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <PickupAddressDetails goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

PickupAddressDetailsRV.layout = LayoutForm

export default PickupAddressDetailsRV
