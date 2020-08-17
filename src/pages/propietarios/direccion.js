import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import PickupAddressDetails from 'src/components/owners/pickupAddressDetails'

function PickupAddressDetailsRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Direccion</h2>
        <Subtitle>
          Contanos por donde tendrian que pasar los huespedes a buscar tu vehiculo al momento de
          alquilarlo
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
