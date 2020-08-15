import styled from 'styled-components'
import { space } from 'src/tokens'

import Layout from 'src/components/layout'
import Features from 'src/components/owners/features'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerTitle = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

function FeaturesRVOne() {
  return (
    <Container>
      <ContainerTitle>
        <h2>Caracteristicas de tu vehiculo</h2>
      </ContainerTitle>
      <ContainerFeatures>
        <Features />
      </ContainerFeatures>
    </Container>
  )
}

FeaturesRVOne.layout = Layout

export default FeaturesRVOne
