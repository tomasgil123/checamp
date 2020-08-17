import styled from 'styled-components'
import { space, colors } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import LayoutForm from 'src/components/layout/layoutForm'
import PickupAddressDetails from 'src/components/owners/pickupAddressDetails'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`
const ContainerTitle = styled.div`
  margin-left: ${space.s3};
`
const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

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
