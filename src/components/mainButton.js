import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, boxShadow } from 'src/tokens/index'

const ContainerButton = styled.div`
  height: 50px;
  width: 100%;
  max-width: 250px;
  font-size: 1.25em;
  border-radius: 4px;
  color: ${colors.base.white};
  background-color: ${colors.base.primaryGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${boxShadow.shadow};
`

const MainButton = ({ text, onClickButton }) => {
  return <ContainerButton onClick={onClickButton}>{text}</ContainerButton>
}

MainButton.propTypes = {
  text: PropTypes.string,
  onClickButton: PropTypes.func,
}

export default MainButton
