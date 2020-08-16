import styled from 'styled-components'
import { space } from 'src/tokens'

import Layout from 'src/components/layout'
import Amenities from 'src/components/owners/amenities'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`

const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

function FeaturesRVOne() {
  return (
    <Container>
      <ContainerFeatures>
        <Amenities />
      </ContainerFeatures>
    </Container>
  )
}

FeaturesRVOne.layout = Layout

export default FeaturesRVOne
