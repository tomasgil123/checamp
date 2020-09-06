import styled from 'styled-components'
import { breakpoints, space, colors } from 'src/tokens'
import Item from './item'

const Container = styled.div`
  padding-top: ${space.s32};
  padding-bottom: ${space.s32};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
    padding-bottom: ${space.s40};
  }
`

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
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
  color: ${colors.text.secondary};
  font-size: ${space.s4};
  font-weight: 400;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s5};
  }
`

function HowItWorks() {
  return (
    <Container>
      <Title>¿Cómo funciona?</Title>
      <TextBody>
        Checamp es el lugar de encuentro para aquellas personas que tienen una casa rodante que
        quieren alquilar y personas que buscan una casa rodante para sus próximas vacaciones
      </TextBody>
      <ContainerItems>
        <Item
          text="Publica tu casa rodante"
          topPx="-18px"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/delivery-4db5ab4a99fe3e47cd538189615dd9db.svg"
        />
        <Item
          text="Recibi contactos de personas interesadas en alquilarla"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/dmv-positive-d837b0e827b93ac3f8a0ae0d03887ac9.svg"
        />
        <Item
          text="Alquila tu casa rodante y gana plata mientras no la usas"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/reviews-big-f2783008163826c3318785d4eb0054af.svg"
        />
      </ContainerItems>
    </Container>
  )
}

export default HowItWorks
