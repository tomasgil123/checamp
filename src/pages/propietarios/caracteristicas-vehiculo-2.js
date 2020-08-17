import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import { Container, ContainerFeatures } from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Amenities from 'src/components/owners/amenities'

function FeaturesRVOne() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
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
