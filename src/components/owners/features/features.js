import styled from 'styled-components'
import { space, colors, breakpoints } from 'src/tokens'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/mainButton'

const ContainerMainButton = styled.div`
  padding-top: ${space.s5};
  padding-bottom: ${space.s5};
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid ${colors.base.borders};
  button {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: right;
    button {
      width: 100%;
    }
  }
`

function Features({ features, addFeatures }) {
  return (
    <Formik
      initialValues={{
        brand: features.brand,
        model: features.model,
        year: features.year,
        length: features.length,
      }}
      validationSchema={Yup.object().shape({
        brand: Yup.string().required('Por favor, indicanos la marca de tu RV'),
        model: Yup.string().required('Por favor, indicanos el modelo de tu RV'),
        year: Yup.number()
          .test(
            'len',
            'Ingresa un ano de 4 digitos. Por ejemplo: 2010',
            (val) => val.toString().length === 4
          )
          .required('Por favor, indicanos el ano de fabricacion de tu RV'),
        length: Yup.number().required('Por favor, indicanos el largo de tu RV'),
      })}
      onSubmit={(values) => {
        addFeatures(values.brand, values.model, values.year, values.length)
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="brand"
            type="text"
            name="brand"
            label="Marca"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.brand}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="model"
            type="text"
            name="model"
            label="Modelo"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.model}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="year"
            type="number"
            name="year"
            label="Ano de fabricacion"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.year}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="length"
            type="number"
            name="length"
            label="Largo (en metros)"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.length}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <ContainerMainButton>
            <MainButton text="Continuar" onClickButton={undefined} type="submit" />
          </ContainerMainButton>
        </form>
      )}
    </Formik>
  )
}

Features.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  features: PropTypes.object,
  addFeatures: PropTypes.func,
}

export default Features
