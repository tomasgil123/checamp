import { useContext } from 'react'
import { PageNavigationContext } from 'src/context'

import {
  Container,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerHelpCard,
} from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutForm'
import Price from 'src/components/owners/price'
import HelpCard from 'src/components/forms/helpCard'

function PriceRV() {
  const { loading, goToNextStep } = useContext(PageNavigationContext)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <ContainerTitle>
        <h2>Precio del alquiler</h2>
        <Subtitle>Contanos que precio queres cobrar por dia y que costos extra existen</Subtitle>
      </ContainerTitle>
      <ContainerFeatures>
        <Price goToNextStep={goToNextStep} />
      </ContainerFeatures>
      <ContainerHelpCard>
        <HelpCard
          title="Sobre los costos extra"
          body="Menciona que otros costos tiene alquilar tu motorhome ademas del precio por dia. Por
          ejemplo, hay un costo extra si se recorren mas de cierta cantidad de km? Hay un cargo
          por limpieza?"
        />
      </ContainerHelpCard>
    </Container>
  )
}

PriceRV.layout = LayoutForm

export default PriceRV
