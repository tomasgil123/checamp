import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, boxShadow, space } from 'src/tokens/index'

const ContainerButton = styled.button`
  height: 50px;
  width: 100%;
  outline: none;
  border-width: 0px;
  font-size: ${space.s4} !important;
  max-width: 250px;
  border-radius: 4px;
  color: ${colors.base.white};
  background-color: ${colors.base.primaryGreen};
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

const MainButton = ({ text, onClickButton, type }) => {
  return (
    <ContainerButton type={type} onClick={onClickButton}>
      {text}
    </ContainerButton>
  )
}

MainButton.propTypes = {
  text: PropTypes.string,
  onClickButton: PropTypes.func,
  type: PropTypes.string,
}

export default MainButton
