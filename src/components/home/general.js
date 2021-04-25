import styled from 'styled-components'
import { breakpoints, space, colors } from 'src/tokens'

const Container = styled.div`
  padding-top: ${space.s8};
  padding-bottom: ${(props) => (props.addPaddingBottom ? `${space.s8}` : `${space.s8}`)};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s12};
    padding-bottom: ${(props) => (props.addPaddingBottom ? `${space.s12}` : `${space.s12}`)};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s16};
    padding-bottom: ${(props) => (props.addPaddingBottom ? `${space.s16}` : `${space.s16}`)};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s6};
  font-weight: 700;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
`

const TextBody = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  font-weight: 400;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-bottom: ${space.s4};
`
export { Container, Title, TextBody }
