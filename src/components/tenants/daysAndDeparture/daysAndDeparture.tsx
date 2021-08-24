import React from 'react'
import * as Yup from 'yup'
// components
import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { Hint } from 'src/components/owners/general'

const PeopleAndBudget = ({
  departureDate,
  numberDays,
  goToNextStep,
  addTenantDepartureDateAndNumberDays,
}): JSX.Element => {
  return (
    <Formik
      initialValues={{
        departureDate,
        numberDays,
      }}
      validationSchema={Yup.object().shape({
        departureDate: Yup.string().required(
          'Por favor, completa con una fecha de partida aproximada'
        ),
        numberDays: Yup.number()
          .required('Por favor, completa con una cantidad de dias aproximada')
          .nullable(),
      })}
      onSubmit={(values): void => {
        addTenantDepartureDateAndNumberDays(values)
        goToNextStep()
      }}
    >
      {(formProps): JSX.Element => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="numberDays"
            type="number"
            name="numberDays"
            label="Cantidad de dias"
            sublabel=""
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.numberDays}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="departureDate"
            type="text"
            name="departureDate"
            label="Fecha de partida"
            sublabel="Indicanda fecha de partida aproximada nos va a ser mas sencillo ayudarte"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.departureDate}
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
