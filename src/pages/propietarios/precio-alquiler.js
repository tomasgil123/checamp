import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerHelpCard,
  ContainerLoader,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Price from 'src/components/owners/price'
import HelpCard from 'src/components/forms/helpCard'
import Loader from 'src/components/primitives/loader'

function PriceRV() {
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
        <h2>Precio del alquiler</h2>
        <Subtitle>Contanos que precio queres cobrar por día y que costos extra existen</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Price goToNextStep={goToNextStep} />
      </ContainerFeatures>
      <ContainerHelpCard>
        <HelpCard
          title="Sobre los costos extra"
          body="Menciona que otros costos tiene alquilar tu Casa Rodante ademas del precio por día. Por
          ejemplo, ¿hay un costo extra si se recorren más de cierta cantidad de km? ¿Hay un cargo
          por limpieza?"
        />
      </ContainerHelpCard>
    </Container>
  )
}

PriceRV.layout = LayoutForm

export default PriceRV
