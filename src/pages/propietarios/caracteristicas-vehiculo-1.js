import styled from 'styled-components'
import { space } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import LayoutForm from 'src/components/layout/layoutForm'
import Features from 'src/components/owners/features'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerTitle = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
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
