import styled from 'styled-components'
import { space, colors } from 'src/tokens'
import PropTypes from 'prop-types'

import ToggleSlider from './toggleSlider'

const Container = styled.div`
  padding-top: ${space.s3};
  padding-bottom: ${space.s3};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ContainerText = styled.div`
  flex: 2;
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

const ToggleSliderInput = ({ name, title, subtitle, value, handleChange }) => {
  return (
    <Container>
      <ContainerText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerText>
      <ContainerInput>
        <ToggleSlider name={name} value={value} handleChange={handleChange} />
      </ContainerInput>
    </Container>
  )
}

ToggleSliderInput.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
}

export default ToggleSliderInput
