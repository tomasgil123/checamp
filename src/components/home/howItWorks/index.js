import styled from 'styled-components'
import { breakpoints } from 'src/tokens'
import Item from './item'
import { Container, Title, TextBody } from '../general'

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: inherit;
  }
`

function HowItWorks() {
  return (
    <Container>
      <Title>¿Cómo funciona?</Title>
      <TextBody>
        Checamp conecta personas que tienen una motorhome para alquilar con personas que buscan una
        para sus próximas vacaciones
      </TextBody>
      <ContainerItems>
        <Item
          text="Publicás tu motorhome de manera gratuita"
          topPx="-18px"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/delivery-4db5ab4a99fe3e47cd538189615dd9db.svg"
        />
        <Item
          text="Te contactamos con personas interesadas"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/dmv-positive-d837b0e827b93ac3f8a0ae0d03887ac9.svg"
        />
        <Item
          text="Alquilala sin ningún costo y ganá plata mientras no la usás"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/reviews-big-f2783008163826c3318785d4eb0054af.svg"
        />
      </ContainerItems>
    </Container>
  )
}

export default HowItWorks
