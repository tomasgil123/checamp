import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

const Title = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.primary};
  font-weight: 600;
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${space.s4_5};
  }
`

const Subtitle = styled.span`
  font-size: ${space.s3_5};
  color: ${colors.text.secondary};
  font-weight: 400;
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${space.s4};
  }
`
const Price = styled.span`
  font-size: ${space.s5};
  color: ${colors.text.primary};
  font-weight: 600;
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${space.s6};
  }
`

const PerNight = styled.span`
  font-size: ${space.s4};
  color: ${colors.text.primary};
  font-weight: 400;
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${space.s5};
  }
`
const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 60%;
  background: ${colors.base.backgroundGray};
  border-radius: ${space.s1};
  div {
    border-radius: ${space.s1};
  }
  img {
    overflow: hidden;
  }
`
const TextWrapper = styled.div`
  padding-left: ${space.s4};
`

export { Title, Subtitle, Price, PerNight, ImageWrapper, TextWrapper }
