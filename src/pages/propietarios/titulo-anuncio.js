import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerLoader,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import NameListingDetails from 'src/components/owners/nameListingDetails'
import Loader from 'src/components/primitives/loader'

function NameListingRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return (
      <Container>
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      </Container>
    )
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Título de tu anuncio</h2>
        <Subtitle>
          Una frase breve que describa tu vehículo. ¡Si tiene un apodo, este es el lugar para
          agregarlo!
        </Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <NameListingDetails goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

NameListingRV.layout = LayoutForm

export default NameListingRV
