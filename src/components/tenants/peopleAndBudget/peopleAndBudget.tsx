import React from 'react'
import * as Yup from 'yup'
// components
import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { Hint } from 'src/components/owners/general'

const PeopleAndBudget = ({
  numberPeople,
  budget,
  goToNextStep,
  addTenantNumberPeopleAndBudget,
}): JSX.Element => {
  return (
    <Formik
      initialValues={{
        numberPeople: numberPeople ? numberPeople : null,
        budget: budget ? budget : null,
      }}
      validationSchema={Yup.object().shape({
        numberPeople: Yup.number()
          .required('Por favor, completa la cantidad de pasajeros')
          .nullable(),
        budget: Yup.number().nullable(),
      })}
      onSubmit={(values): void => {
        addTenantNumberPeopleAndBudget(values)
        goToNextStep()
      }}
    >
      {(formProps): JSX.Element => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="numberPeople"
            type="number"
            name="numberPeople"
            label="Cantidad de pasajeros"
            sublabel=""
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.numberPeople}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="budget"
            type="number"
            name="budget"
            label="Presupuesto aproximado por día"
            sublabel="Indicando un presupuesto aproximado nos va a ser mas sencillo ayudarte"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.budget}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <WrapperSubmitSection />
          <ContainerSubmitButton>
            <MainButton text="Continuar" onClickButton={undefined} type="submit" />
          </ContainerSubmitButton>
        </form>
      )}
    </Formik>
  )
}

export default PeopleAndBudget
