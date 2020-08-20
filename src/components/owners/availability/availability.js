import PropTypes from 'prop-types'
import * as Yup from 'yup'

import { Formik } from 'formik'
import TextareaInput from 'src/components/forms/textareaInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'

function Availability({ availability, addAvailability, goToNextStep }) {
  return (
    <Formik
      initialValues={{
        availability,
      }}
      validationSchema={Yup.object().shape({
        availability: Yup.string().required(
          'Por favor, completa cuando podrias alquilar tu motor home'
        ),
      })}
      onSubmit={(values) => {
        addAvailability(values.availability)
        goToNextStep()
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <TextareaInput
            key="availability"
            type="text"
            name="availability"
            label="Disponibilidad"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.availability}
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

Availability.propTypes = {
  availability: PropTypes.string,
  addAvailability: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default Availability
