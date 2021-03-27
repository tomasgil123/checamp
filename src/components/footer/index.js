import styled from 'styled-components'
import { space, breakpoints, colors } from 'src/tokens'
import SocialNetworkIcon from './socialNetworkIcon'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${colors.base.backgroundGray};
  border-top: 1px solid ${colors.base.borders};
  padding-top: ${space.s6};
  padding-bottom: ${space.s6};
  padding-left: ${space.s12};
  padding-right: ${space.s12};
  align-items: center;
  width: 100%;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
`

const Footer = ({ addPositionAbsolute }) => {
  return (
    <Container style={addPositionAbsolute ? { position: 'absolute', bottom: '0' } : {}}>
      <div>© Checamp 2020</div>
      <ContainerIcons>
        <SocialNetworkIcon
          imgLink="https://d1o5877uy6tsnd.cloudfront.net/application-layout/icons/facebook.png"
          socialNetworkLink="https://www.facebook.com/"
        />
        <SocialNetworkIcon
          imgLink="https://d1o5877uy6tsnd.cloudfront.net/application-layout/icons/twitter.png"
          socialNetworkLink="https://twitter.com"
        />
        <SocialNetworkIcon
          imgLink="https://d1o5877uy6tsnd.cloudfront.net/application-layout/icons/instagram.png"
          socialNetworkLink="https://instagram.com"
        />
      </ContainerIcons>
    </Container>
  )
}

export default Footer
