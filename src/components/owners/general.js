import styled from 'styled-components'
import { colors, space } from 'src/tokens'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
  margin-bottom: ${space.s32};
`
const ContainerTitle = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

const ContainerHelpCard = styled.div`
  margin-top: ${space.s4};
  div {
    margin: auto;
  }
`

export { Container, ContainerTitle, ContainerFeatures, Subtitle, ContainerHelpCard }
