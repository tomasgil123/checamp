import { useRouter } from 'next/router'
import styled from 'styled-components'
import { colors, breakpoints, space } from 'src/tokens'

import OptimizedImgWithDifferentImgOptions from 'src/components/primitives/optimizedImgWithDifferentImgOptions'
import MainButton from 'src/components/primitives/mainButton'

const Container = styled.div`
  background-color: ${colors.base.white};
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    height: 60vh;
  }
`

const ContainerImageLanding = styled.div`
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    flex: 4;
    padding-right: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    flex: 5;
    padding-right: ${space.s40};
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: 0% 50%;
    @media (min-width: ${breakpoints.lg}) {
      height: 60vh;
    }
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
    padding-top: ${space.s40};
    padding-left: ${space.s12};
    padding-right: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
    padding-left: ${space.s40};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s8};
  text-align: center;
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
  text-align: center;
`

const ContainerButton = styled.div`
  button {
    margin: auto;
  }
  margin-top: ${space.s6};
  position: relative;
  z-index: 100;
`

function Landing() {
  const router = useRouter()

  const onRentRV = () => {
    router.push({
      pathname: `/propietarios/tipo-de-vehiculo`,
    })
  }
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT ? ' - DEV' : ''
  return (
    <Container>
      <ContainerTitle>
        <Title>{`Publica tu Casa Rodante ${environment}`}</Title>
        <SubTitle>¡Gana plata mientras no la estas usando!</SubTitle>
        <ContainerButton>
          <MainButton text="Publicar mi Casa Rodante" onClickButton={onRentRV} />
        </ContainerButton>
      </ContainerTitle>
      <ContainerImageLanding>
        <OptimizedImgWithDifferentImgOptions
          srcImg="checamp-landing-2.jpg"
          srcImgMobile="checamp_landing_2_app.jpeg"
        />
      </ContainerImageLanding>
    </Container>
  )
}

export default Landing
