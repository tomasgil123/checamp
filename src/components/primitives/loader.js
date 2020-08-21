import styled, { keyframes } from 'styled-components'
import { colors } from 'src/tokens/'
import PropTypes from 'prop-types'

const LoaderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% {  transform: rotate(360deg) }
`

const LoaderStyles = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 4px;
    border: 4px solid
      ${(props) => (props.secondary ? `${colors.base.primaryGreen}` : `${colors.base.white}`)};
    border-radius: 50%;
    animation: ${LoaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) =>
        props.secondary ? `${colors.base.primaryGreen}` : `${colors.base.white}`}
      transparent transparent transparent;
  }
`

function Loader({ secondary }) {
  return (
    <LoaderStyles secondary={secondary}>
      <div />
      <div style={{ animationDelay: '-0.45s' }} />
      <div style={{ animationDelay: '-0.3s' }} />
      <div style={{ animationDelay: '-0.15s' }} />
    </LoaderStyles>
  )
}

Loader.propTypes = {
  secondary: PropTypes.bool,
}

export default Loader
