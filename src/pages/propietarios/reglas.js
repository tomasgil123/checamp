import styled from 'styled-components'
import { space, colors } from 'src/tokens'

import Layout from 'src/components/layout'
import Rules from 'src/components/owners/rules'

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

function RulesRV() {
  return (
    <Container>
      <ContainerTitle>
        <h2>Reglas del vehiculo</h2>
        <Subtitle>Inidica que cosas se permiten hacer y cuales no con tu vehiculo</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Rules />
      </ContainerFeatures>
    </Container>
  )
}

RulesRV.layout = Layout

export default RulesRV
