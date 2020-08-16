import styled from 'styled-components'
import { space, boxShadow, colors } from 'src/tokens'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding-top: ${space.s3};
  padding-bottom: ${space.s3};
`

const LabelElement = styled.label`
  font-size: ${space.s4};
  font-weight: 500;
  width: 100%;
  display: block;
  color: ${colors.text.primary};
  margin-bottom: ${space.s2};
`

const InputElement = styled.input`
  width: 100%;
  border-width: 1px !important;
  border: 0 solid
    ${(props) => (props.error ? `${colors.text.error}` : `${colors.base.inputBorders}`)};
  outline: none !important;
  border-radius: 4px;
  height: calc(${space.s10} - 2px);
  box-shadow: ${boxShadow.shadow};
  padding-left: ${space.s2};
  &:focus {
    outline: none !important;
    border: 1px solid ${colors.base.primaryGreen};
    box-shadow: 0 0 10px ${colors.base.secondaryBlue};
  }
`

const ErrorMessage = styled.div`
  height: ${space.s5};
  color: ${colors.text.error};
`

const FormInput = ({ type, name, label, value, handleChange, handleBlur, errors, touched }) => {
  const showErrorMessage = errors[name] && touched[name]

  const errorMessage = showErrorMessage ? (
    <ErrorMessage>{errors[name]}</ErrorMessage>
  ) : (
    <ErrorMessage />
  )

  return (
    <Container>
      <LabelElement>{label}</LabelElement>
      <InputElement
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showErrorMessage}
      />
      {errorMessage}
    </Container>
  )
}

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  touched: PropTypes.object,
}

export default FormInput
