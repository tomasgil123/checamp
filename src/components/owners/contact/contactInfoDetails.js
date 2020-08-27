import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { isPhoneValid, isEmailValid } from 'src/utils/owners'

import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/primitives/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'
import { Hint } from 'src/components/owners/general'

function ContactInfoDetails({ contactInfo, addContactInfo, goToNextStep }) {
  return (
    <Formik
      initialValues={{
        email: contactInfo.email,
        phone: contactInfo.phone,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .test('is-phone-valid', 'Ese email no parece ser valido', (val) => isEmailValid(val))
          .required('Por favor, completa con tu email'),
        phone: Yup.string()
          .test('is-phone-valid', 'Ese numero no parece ser valido', (val) => isPhoneValid(val))
          .required('Por favor, completa con tu numero de telefono'),
      })}
      onSubmit={(values) => {
        addContactInfo(values)
        goToNextStep()
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="email"
            type="text"
            name="email"
            label="Tu direccion de email"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.email}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="phone"
            type="number"
            name="phone"
            label="Tu numero de celular"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.phone}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <Hint>
            Recorda utilizar la característica correcta al momento de ingresar tu número. Por ej: si
            es un número de capital utiliza 11
          </Hint>
          <WrapperSubmitSection />
          <ContainerSubmitButton>
            <MainButton text="Continuar" onClickButton={undefined} type="submit" />
          </ContainerSubmitButton>
        </form>
      )}
    </Formik>
  )
}

ContactInfoDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contactInfo: PropTypes.object,
  addContactInfo: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default ContactInfoDetails
