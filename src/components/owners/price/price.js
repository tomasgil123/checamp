import PropTypes from 'prop-types'
import * as Yup from 'yup'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Formik } from 'formik'
import TextareaInput from 'src/components/forms/textareaInput'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import RadioButton from 'src/components/forms/radioButton'

const ContainerInputPrice = styled.div`
  position: relative;
  display: inline;
  z-index: 10;
  &:before {
    content: '$';
    padding: 0 10px;
    text-align: center;
    position: absolute;
    top: 48px;
  }
  input {
    text-indent: 17px;
  }
`

function Price({ priceDetails, addPriceDetails, goToNextStep }) {
  const [typeCurrency, setTypeCurrency] = useState('pesos')
  return (
    <Formik
      initialValues={{
        pricePerDay: priceDetails.pricePerDay,
        priceExtra: priceDetails.priceExtra,
      }}
      validationSchema={Yup.object().shape({
        pricePerDay: Yup.number().required(
          'Por favor, indicanos a que precio por día vas a alquilar tu motorhome'
        ),
        priceExtra: Yup.string(),
      })}
      onSubmit={(values) => {
        if (typeCurrency === 'pesos') {
          values.pricePerDay = `$${values.pricePerDay}`
        } else {
          values.pricePerDay = `U$S${values.pricePerDay}`
        }
        addPriceDetails(values)
        goToNextStep()
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <ContainerInputPrice>
            <FormInput
              key="pricePerDay"
              type="number"
              name="pricePerDay"
              label="Precio por día"
              handleChange={formProps.handleChange}
              handleBlur={formProps.handleBlur}
              value={formProps.values.pricePerDay}
              errors={formProps.errors}
              touched={formProps.touched}
            />
            <div className="flex flex-row items-center pb-4">
              <RadioButton
                name="Pesos"
                onChange={() => setTypeCurrency('pesos')}
                value="pesos"
                groupName="price"
                checked={typeCurrency === 'pesos'}
              />
              <RadioButton
                name="Dólares"
                onChange={() => setTypeCurrency('dolares')}
                value="dolares"
                groupName="price"
                checked={typeCurrency === 'dolares'}
              />
            </div>
          </ContainerInputPrice>

          <TextareaInput
            key="priceExtra"
            type="text"
            name="priceExtra"
            label="Costos extra (opcional)"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.priceExtra}
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

Price.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  priceDetails: PropTypes.object,
  addPriceDetails: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default Price
