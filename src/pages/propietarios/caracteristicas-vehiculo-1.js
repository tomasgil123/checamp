import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  ContainerLoader,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Features from 'src/components/owners/features'
import Loader from 'src/components/primitives/loader'

function FeaturesRVOne() {
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
        <h2>Caracteristicas de tu vehiculo</h2>
      </ContainerTitle>
      <ContainerFeatures>
        <Features goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

FeaturesRVOne.layout = LayoutForm

export default FeaturesRVOne
