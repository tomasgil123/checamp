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

const ContainerText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: ${space.s4};
  font-weight: 600;
  color: ${colors.text.primary};
  padding-bottom: ${space.s2};
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
`

const ContainerInput = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const MinusPlusInputElement = styled.button`
  border-width: 1px !important;
  border-top: 1.3px solid
    ${(props) => (props.active ? `${colors.base.primaryGreen}` : `${colors.base.inputBorders}`)} !important;
  border: 0 solid
    ${(props) => (props.active ? `${colors.base.primaryGreen}` : `${colors.base.inputBorders}`)};
  outline: none !important;
  border-radius: 4px;
  height: ${space.s8};
  width: ${space.s8};
  position: relative;
  background: ${colors.base.grayBgIcons};
  font-size: ${space.s5};
  box-shadow: ${boxShadow.shadow};
  top: 0px;
  transition: top ease 0.3s;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:active {
    top: 3px;
    box-shadow: none;
  }
  svg {
    width: 100%;
  }
`

const Number = styled.span`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const MinusPlusInput = ({ name, title, subtitle, value, handleChange }) => {
  const onClickMinusButton = () => {
    if (value > 1) {
      handleChange(name, value - 1)
    }
  }

  return (
    <Container>
      <ContainerText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerText>
      <ContainerInput>
        <MinusPlusInputElement active={value > 1} onClick={onClickMinusButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.95 7.53">
            <path
              fill={value > 1 ? `${colors.base.primaryGreen}` : `${colors.base.minusIcon}`}
              d="M3.76 7.52a3.76 3.76 0 0 1 0-7.52h56.42a3.76 3.76 0 0 1 0 7.52z"
            />
          </svg>
        </MinusPlusInputElement>
        <Number>{value}</Number>
        <MinusPlusInputElement active onClick={() => handleChange(name, value + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.95 64">
            <path
              fill={`${colors.base.primaryGreen}`}
              d="M60.18 28.24H35.73V3.76a3.76 3.76 0 1 0-7.52 0v24.48H3.76a3.76 3.76 0 0 0 0 7.52h24.45v24.43a3.76 3.76 0 1 0 7.52 0V35.76h24.45a3.76 3.76 0 0 0 0-7.52z"
            />
          </svg>
        </MinusPlusInputElement>
      </ContainerInput>
    </Container>
  )
}

MinusPlusInput.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
}

export default MinusPlusInput
