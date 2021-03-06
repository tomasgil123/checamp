import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, boxShadow, space } from 'src/tokens/index'

import TipIcon from './tipIcon'

const Card = styled.div`
  height: auto;
  width: 300px;
  font-size: ${space.s4} !important;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: ${space.s6};
  box-shadow: ${boxShadow.shadow};
`

const ContainerIcon = styled.span`
  flex-shrink: 0;
  svg {
    width: 48px;
    height: 48px;
  }
`

const ContainerText = styled.div`
  margin-left: ${space.s3} !important;
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-weight: 600;
`

const Body = styled.div`
  color: ${colors.text.primary};
  font-weight: 400;
`

const HelpCard = ({ icon, title, children }) => {
  const iconElement = !icon ? <TipIcon /> : null
  return (
    <Card>
      <ContainerIcon>{iconElement}</ContainerIcon>
      <ContainerText>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </ContainerText>
    </Card>
  )
}

HelpCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
}

export default HelpCard
