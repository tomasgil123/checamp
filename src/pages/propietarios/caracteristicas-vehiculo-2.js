import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import { Container, ContainerFeatures, ContainerLoader } from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Amenities from 'src/components/owners/amenities'
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
      <ContainerFeatures>
        <Amenities goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

FeaturesRVOne.layout = LayoutForm

export default FeaturesRVOne
