import styled from 'styled-components'
import { space } from 'src/tokens'
import RVOptions from 'src/components/owners/RVOptions'
import Layout from 'src/components/layout'
import { withRouteValidationAndNavigation } from 'src/HOCs/forms'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerTitle = styled.div`
  margin-left: ${space.s3};
`

function TypeRV() {
  return (
    <Container>
      <ContainerTitle>
        <h2>Indica tu tipo de vehiculo</h2>
      </ContainerTitle>
      <RVOptions goToNextStep={undefined} />
    </Container>
  )
}

TypeRV.layout = Layout

export default TypeRV
