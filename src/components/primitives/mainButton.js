import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, boxShadow, space } from 'src/tokens/index'

import Loader from './loader'

const ContainerButton = styled.button`
  height: ${space.s12};
  width: 100%;
  outline: none;
  border-width: 0px;
  border: ${(props) => (props.secondary ? `2px solid ${colors.base.primaryGreen}` : `inherit`)};
  font-size: ${space.s4} !important;
  max-width: ${space.s64};
  border-radius: 4px;
  color: ${(props) => (props.secondary ? `${colors.base.primaryGreen}` : `${colors.base.white}`)};
  background-color: ${(props) =>
    props.secondary ? `${colors.base.white}` : `${colors.base.primaryGreen}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${boxShadow.shadow};
  position: relative;
  top: 0px;
  transition: top ease 0.3s;
  &:active {
    top: 3px;
    box-shadow: none;
  }
`

const MainButton = ({ text, onClickButton, type, secondary, isLoading }) => {
  const contentButton = isLoading ? <Loader secondary={secondary} /> : <>{text}</>

  return (
    <ContainerButton secondary={secondary} type={type} onClick={onClickButton}>
      {contentButton}
    </ContainerButton>
  )
}

MainButton.propTypes = {
  text: PropTypes.string,
  onClickButton: PropTypes.func,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default MainButton
