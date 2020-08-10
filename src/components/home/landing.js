import styled from 'styled-components'
import { colors, breakpoints, space } from 'src/tokens'

import OptimizedImg from 'src/components/optimizedImg'
import MainButton from 'src/components/mainButton'

const Container = styled.div`
  background-color: ${colors.base.white};
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    height: 70vh;
  }
`

const ContainerImageLanding = styled.div`
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    flex: 4;
    padding-right: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    flex: 5;
    padding-right: ${space.s12};
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: 30% 50%;
  }
`

const ContainerTitle = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: ${space.s8};
  padding-bottom: ${space.s8};
  @media (min-width: ${breakpoints.md}) {
    flex: 5;
    margin: inherit;
    text-align: left;
    padding-top: ${space.s12};
    padding-left: ${space.s12};
    padding-right: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s24};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s8};
  font-weight: 700;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s10};
  }
`

const SubTitle = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  font-weight: 300;
`

const ContainerButton = styled.div`
  div {
    margin: auto;
    @media (min-width: ${breakpoints.md}) {
      margin: inherit;
    }
  }
  margin-top: ${space.s6};
  position: relative;
  z-index: 100;
`

function Landing() {
  const onRentRV = () => {}
  return (
    <Container>
      <ContainerTitle>
        <Title>List Your RV on Outdoorsy</Title>
        <SubTitle>Earn great money renting your RV when you re not using it!</SubTitle>
        <ContainerButton>
          <MainButton text="Alquilar mi RV" onClickButton={onRentRV} />
        </ContainerButton>
      </ContainerTitle>
      <ContainerImageLanding>
        <OptimizedImg srcImg="checamp-landing.jpg" />
      </ContainerImageLanding>
    </Container>
  )
}

export default Landing
