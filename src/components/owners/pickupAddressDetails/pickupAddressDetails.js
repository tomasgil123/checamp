import PropTypes from 'prop-types'
import * as Yup from 'yup'

import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'

function PickupAddressDetails({ pickupAddressDetails, addPickupAddressDetails }) {
  return (
    <Formik
      initialValues={{
        pickupAddress: pickupAddressDetails.pickupAddress,
        city: pickupAddressDetails.city,
      }}
      validationSchema={Yup.object().shape({
        pickupAddress: Yup.string().required(
          'Por favor, indicanos la direccion por la cual los huespedes van a tener que pasar a buscar tu RV'
        ),
        city: Yup.string().required(
          'Por favor, inidicanos a que ciudad corresponde la direccion anterior RV'
        ),
      })}
      onSubmit={(values) => {
        addPickupAddressDetails(values.pickupAddress, values.city)
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="pickupAddress"
            type="text"
            name="pickupAddress"
            label="Direccion de pickup"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.pickupAddress}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <FormInput
            key="city"
            type="text"
            name="city"
            label="Ciudad"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.city}
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

PickupAddressDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pickupAddressDetails: PropTypes.object,
  addPickupAddressDetails: PropTypes.func,
}

export default PickupAddressDetails