import styled from 'styled-components'
import { space } from 'src/tokens'
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import RVOptions from 'src/components/owners/RVOptions'
// import Layout from 'src/components/layout/'
import LayoutForm from 'src/components/layout/layoutForm'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
`
const ContainerTitle = styled.div`
  margin-left: ${space.s3};
`

// const goToNextStep = useContext(PageNavigationContext)
// console.log('goToNextStep', goToNextStep)

function TypeRV() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitle>
        <h2>Indica tu tipo de vehiculo</h2>
      </ContainerTitle>
      <RVOptions goToNextStep={goToNextStep} />
    </Container>
  )
}

TypeRV.layout = LayoutForm

export default TypeRV
