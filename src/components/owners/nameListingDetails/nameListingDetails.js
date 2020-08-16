import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { space, colors } from 'src/tokens'
import styled from 'styled-components'

import { Formik } from 'formik'
import FormInput from 'src/components/forms/formInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'

const CharacterLimit = styled.div`
  font-size: ${space.s4};
  font-weight: 400;
  color: ${colors.text.secondary};
  width: 100%;
`

function NameListingDetails({ nameListing, addNameListing }) {
  return (
    <Formik
      initialValues={{
        name: nameListing.nameListing,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .test(
            'len',
            'Intenta que el titulo no tenga mas de 75 caracteres',
            (val) => val.toString().length < 76
          )
          .required('Por favor, completa el titulo de tu anuncio'),
      })}
      onSubmit={(values) => {
        addNameListing(values.name)
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <FormInput
            key="name"
            type="text"
            name="name"
            label="Titulo de tu anuncio"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.name}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <CharacterLimit>{`${formProps.values.name.length} / 75 caracteres`}</CharacterLimit>
          <WrapperSubmitSection />
          <ContainerSubmitButton>
            <MainButton text="Continuar" onClickButton={undefined} type="submit" />
          </ContainerSubmitButton>
        </form>
      )}
    </Formik>
  )
}

NameListingDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  nameListing: PropTypes.object,
  addNameListing: PropTypes.func,
}

export default NameListingDetails
