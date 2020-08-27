import PropTypes from 'prop-types'
import * as Yup from 'yup'

import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'

function Features({ features, addFeatures, goToNextStep }) {
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
            (val) => !val || val.toString().length === 4
          )
          .required('Por favor, indicanos el ano de fabricacion de tu RV'),
        length: Yup.number().required('Por favor, indicanos el largo de tu RV'),
      })}
      onSubmit={(values) => {
        addFeatures(values.brand, values.model, values.year, values.length)
        goToNextStep()
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
            label="Largo (en metros) - Utiliza un punto para indicar decimales. Ej: 2.5"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.length}
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

Features.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  features: PropTypes.object,
  addFeatures: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default Features
