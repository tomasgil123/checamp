import { useContext, FC } from 'react'
import { PageNavigationContext } from 'src/context'
// components
import { Container, ContainerTitle, ContainerFeatures } from 'src/components/owners/general'
import PeopleAndBudget from 'src/components/tenants/peopleAndBudget'
import LayoutForm from 'src/components/layout/layoutFormTenant'
// types
import PageWithLayout from 'src/types/pageWithLayout'

const PeopleAndBudgetPage: FC = () => {
  const { goToNextStep } = useContext(PageNavigationContext)
  return (
    <Container>
      <ContainerTitle>
        <h2 className="text-lg pb-4">Cantidad de pasajeros y presupuesto</h2>
      </ContainerTitle>
      <ContainerFeatures>
        <PeopleAndBudget goToNextStep={goToNextStep} />
      </ContainerFeatures>
    </Container>
  )
}

;(PeopleAndBudgetPage as PageWithLayout<any>).layout = LayoutForm

export default PeopleAndBudgetPage
