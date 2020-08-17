import styled from 'styled-components'
import { space, colors } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import LayoutForm from 'src/components/layout/layoutForm'
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