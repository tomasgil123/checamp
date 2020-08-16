import styled from 'styled-components'
import { space, colors } from 'src/tokens'

import Layout from 'src/components/layout'
import DescriptionListingDetails from 'src/components/owners/descriptionListingDetails'

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

function DescriptionListingRV() {
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
        <DescriptionListingDetails />
      </ContainerFeatures>
    </Container>
  )
}

DescriptionListingRV.layout = Layout

export default DescriptionListingRV
