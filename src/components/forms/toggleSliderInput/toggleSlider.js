import styled from 'styled-components'
import { colors } from 'src/tokens'
import PropTypes from 'prop-types'

const LabelElement = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  input {
    display: none;
  }
`

const Slider = styled.div`
  background-color: ${colors.base.minusPlusButton};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    background-color: ${colors.base.white};
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`

const InputElement = styled.input`
  &:checked + ${Slider} {
    background-color: ${colors.base.primaryGreen};
  }
  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`

const ToggleSlider = ({ name, value, handleChange }) => {
  return (
    <LabelElement htmlFor={`checkbox-slider-${name}`}>
      <InputElement
        key={name}
        name={name}
        checked={value}
        onChange={handleChange}
        type="checkbox"
        id={`checkbox-slider-${name}`}
      />
      <Slider />
    </LabelElement>
  )
}

ToggleSlider.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
}

export default ToggleSlider
