import styled from 'styled-components'
import { space } from 'src/tokens'

import Layout from 'src/components/layout'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerTitle = styled.div`
  margin-left: ${space.s3};
`

function FeaturesRVOne() {
  return (
    <Container>
      <ContainerTitle>
        <h2>Caractersiticas de tu vehiculo</h2>
      </ContainerTitle>
    </Container>
  )
}

FeaturesRVOne.layout = Layout

export default FeaturesRVOne
