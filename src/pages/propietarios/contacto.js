import styled from 'styled-components'
import { space, colors } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

// import LayoutForm from 'src/components/layout/layoutForm'
import Layout from 'src/components/layout'
import Contact from 'src/components/owners/contact'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`
const ContainerTitle = styled.div`
  margin-left: ${space.s3};
`
const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

function ContactInfoOwner() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Tu informacion de contacto</h2>
        <Subtitle>
          Vamos a necesitar un mail y un numero de celular para avisarte cuando alguien quiera
          alquilar tu motor home. Nunca va a ser compartido con terceros sin tu autorizacion
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Contact goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

ContactInfoOwner.layout = Layout

export default ContactInfoOwner
