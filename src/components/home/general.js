import styled from 'styled-components'
import { breakpoints, space, colors } from 'src/tokens'

const Container = styled.div`
  padding-top: ${space.s32};
  padding-bottom: ${(props) => (props.addPaddingBottom ? `${space.s32}` : 'inherit')};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
    padding-bottom: ${(props) => (props.addPaddingBottom ? `${space.s40}` : 'inherit')};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s8};
  font-weight: 700;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s10};
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
