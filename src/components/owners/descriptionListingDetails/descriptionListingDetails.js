import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { space, colors } from 'src/tokens'
import styled from 'styled-components'

import { Formik } from 'formik'
import TextareaInput from 'src/components/forms/textareaInput'
import MainButton from 'src/components/mainButton'
import { WrapperSubmitSection, ContainerSubmitButton } from 'src/components/forms/submitButton'

const CharacterLimit = styled.div`
  font-size: ${space.s4};
  font-weight: 400;
  color: ${colors.text.secondary};
  width: 100%;
`

const Hint = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s2};
  padding-top: ${space.s3};
`

function DescriptionListingDetails({ descriptionListing, addDescriptionListing, goToNextStep }) {
  return (
    <Formik
      initialValues={{
        description: descriptionListing.descriptionListing,
      }}
      validationSchema={Yup.object().shape({
        description: Yup.string()
          .test(
            'len',
            'Intenta que la descripcion no tenga menos de 20 caracteres',
            (val) => val.toString().length > 21
          )
          .required('Por favor, completa la descripcion de tu anuncio'),
      })}
      onSubmit={(values) => {
        addDescriptionListing(values.name)
        goToNextStep()
      }}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <TextareaInput
            key="description"
            type="text"
            name="description"
            label="Descripcion de tu anuncio"
            handleChange={formProps.handleChange}
            handleBlur={formProps.handleBlur}
            value={formProps.values.description}
            errors={formProps.errors}
            touched={formProps.touched}
          />
          <Hint>Tu descripcion tiene que tener por lo menos 20 caracteres</Hint>
          <CharacterLimit>{`${formProps.values.description.length} caracteres`}</CharacterLimit>
          <WrapperSubmitSection />
          <ContainerSubmitButton>
            <MainButton text="Continuar" onClickButton={undefined} type="submit" />
          </ContainerSubmitButton>
        </form>
      )}
    </Formik>
  )
}

DescriptionListingDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  descriptionListing: PropTypes.object,
  addDescriptionListing: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default DescriptionListingDetails
