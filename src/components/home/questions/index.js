/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'
import { space, colors, boxShadow } from 'src/tokens'
import { support } from 'src/utils'
import { Container, Title, TextBody } from '../general'

const ContainerButtonSupportNumber = styled.div`
  padding: ${space.s12};
  display: flex;
  justify-content: center;
`

const ButtonSupportNumber = styled.div`
  height: ${space.s12};
  width: 100%;
  outline: none;
  border-width: 0px;
  border: 2px solid ${colors.base.primaryGreen};
  font-size: ${space.s4} !important;
  max-width: ${space.s64};
  border-radius: 4px;
  color: ${colors.base.primaryGreen};
  background-color: ${colors.base.white};
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

function Questions() {
  return (
    <Container>
      <Title>¿Todavía te quedan dudas?</Title>
      <TextBody>Contactanos por whatsapp, estamos para ayudarte</TextBody>
      <ContainerButtonSupportNumber>
        <ButtonSupportNumber>
          <a href={`https://wa.me/${support.supportNumberComplete}`} target="_blank">
            {support.supportNumber}
          </a>
        </ButtonSupportNumber>
      </ContainerButtonSupportNumber>
    </Container>
  )
}

export default Questions
