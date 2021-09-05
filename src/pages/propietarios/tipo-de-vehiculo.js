/* eslint-disable react/jsx-no-target-blank */
import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'
import styled from 'styled-components'
import { support } from 'src/utils'

import { Container, ContainerTitle, ContainerHelpCard } from 'src/components/owners/general'
import TypeRVOptions from 'src/components/owners/typeRVOptions'
import LayoutForm from 'src/components/layout/layoutForm'
import HelpCard from 'src/components/forms/helpCard'

const ContainerTitleTypeRV = styled(ContainerTitle)`
  text-align: center;
`

function TypeRV() {
  const { goToNextStep } = useContext(PageNavigationContext)

  return (
    <Container>
      <ContainerTitleTypeRV>
        <h2>Indicanos tu tipo de vehículo</h2>
      </ContainerTitleTypeRV>
      <TypeRVOptions goToNextStep={goToNextStep} />
      <ContainerHelpCard>
        <HelpCard title="Consejo">
          <span>¿Tenés una consulta? Escribinos por whatsapp al </span>
          <a href={`https://wa.me/${support.supportNumberComplete}`} target="_blank">
            {support.supportNumber}
          </a>
        </HelpCard>
      </ContainerHelpCard>
    </Container>
  )
}

TypeRV.layout = LayoutForm

export default TypeRV
