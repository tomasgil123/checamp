import styled from 'styled-components'
import { space, boxShadow, colors } from 'src/tokens'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding-top: ${space.s3};
  padding-bottom: ${space.s3};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LabelElement = styled.label`
  font-size: ${space.s4};
  font-weight: 400;
  color: ${colors.text.primary};
  width: 100%;
  display: block;
`

const IconElement = styled.div`
  color: ${colors.text.secondary};
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  &:before {
    background-position: ${(props) =>
      props.itemChecked ? props.checked : props.unchecked} !important;
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: bottom;
    background: url(https://d1o5877uy6tsnd.cloudfront.net/marketplace-dashboard-production/@outdoorsyco/marketplace-components/images/amenities-and-rules-132f6011a9f77206ec4630bb67ba8bc5.png)
      no-repeat;
    background-size: 48px auto;
  }
`

const InputElement = styled.input`
  border-width: 1px !important;
  border: 0 solid
    ${(props) => (props.error ? `${colors.text.error}` : `${colors.base.inputBorders}`)};
  outline: none !important;
  border-radius: 4px;
  height: ${space.s6};
  width: ${space.s8};
  &:focus {
    outline: none !important;
    border: 1px solid ${colors.base.primaryGreen};
    box-shadow: 0 0 10px ${colors.base.secondaryBlue};
  }
  &:checked {
    background-color: ${colors.base.primaryGreen};
  }
`

const CheckboxInput = ({
  type,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  checked,
  unchecked,
}) => {
  return (
    <Container>
      <InputElement
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <IconElement itemChecked={value} checked={checked} unchecked={unchecked} />
      <LabelElement>{label}</LabelElement>
    </Container>
  )
}

CheckboxInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  checked: PropTypes.string,
  unchecked: PropTypes.string,
}

export default CheckboxInput
