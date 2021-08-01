import { useContext, FC } from 'react'
import { PageNavigationContext } from 'src/context'
// components
import { Container, ContainerTitle, ContainerFeatures } from 'src/components/owners/general'
import LayoutForm from 'src/components/layout/layoutFormTenant'
import DaysAndDepartureDate from 'src/components/tenants/daysAndDeparture'
// types
import PageWithLayout from 'src/types/pageWithLayout'

const DaysAndDepartureDatePage: FC = () => {
  const { goToNextStep } = useContext(PageNavigationContext)
  return (
    <Container>
      <ContainerTitle>
        <h2 className="text-lg pb-4">Pasajeros y dia de partida</h2>
      </ContainerTitle>
      <ContainerFeatures>
        <DaysAndDepartureDate goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

;(DaysAndDepartureDatePage as PageWithLayout<any>).layout = LayoutForm

export default DaysAndDepartureDatePage
