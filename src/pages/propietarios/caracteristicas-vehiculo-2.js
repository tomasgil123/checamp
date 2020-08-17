import styled from 'styled-components'
import { space } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import LayoutForm from 'src/components/layout/layoutForm'
import Amenities from 'src/components/owners/amenities'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`

const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

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
