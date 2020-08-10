import styled from 'styled-components'
import { breakpoints, space, colors } from 'src/tokens'
import Item from './item'

const Container = styled.div`
  padding-top: ${space.s24};
  padding-bottom: ${space.s24};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
    padding-bottom: ${space.s40};
  }
`

const ContainerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

function HowItWorks() {
  return (
    <Container>
      <Title>
        Por qué poner en alquiler tu <br /> autocaravana en CheCamp
      </Title>
      <ContainerItems>
        <Item
          text="Contratamos seguros especiales para cada una de las autocaravanas que se alquilan en nuestra plataforma"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/insurance-de28d3957af71938dd1dde41c4a3dbd0.svg"
        />
        <Item
          text="Todos los usuarios de la pagina antes de poder alquilar un autocaravana deben pasar una serie de controles estrictos"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/reviews-big-f2783008163826c3318785d4eb0054af.svg"
        />
        <Item
          text="Tenemos un equipo de soporte listo para ayudarte en lo que necesites"
          icon="https://d1o5877uy6tsnd.cloudfront.net/marketplace-search-production/images/icons/support-9f0b0a9ecca1f83e11baaa77b67e878c.svg"
        />
      </ContainerItems>
    </Container>
  )
}

export default HowItWorks
