/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, space } from 'src/tokens'

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: ${space.s12};
  min-height: 90vh;
  margin-bottom: ${space.s32};
`
const ContainerTitle = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const ContainerFeatures = styled.div`
  padding-left: ${space.s4};
  padding-right: ${space.s4};
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s4};
`

const ContainerHelpCard = styled.div`
  margin-top: ${space.s4};
  div {
    margin: auto;
  }
`

const ContainerLoader = styled.div`
  padding-top: ${space.s4};
  margin: auto;
  text-align: center;
`

const ContainerButton = styled.div`
  margin-top: ${space.s4};
  button {
    margin: auto;
  }
`

const CharacterLimit = styled.div`
  font-size: ${space.s4};
  font-weight: 400;
  color: ${colors.text.secondary};
  width: 100%;
`

const Hint = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-bottom: ${space.s2};
  padding-top: ${space.s3};
`

const ContainerSupportNumber = styled.div`
  padding-top: ${space.s3};
  padding-bottom: ${space.s3};
  color: ${colors.text.secondary};
`
const Name = styled.span`
  padding-right: ${space.s3};
`
const SupportNumber = ({ name, number, numberComplete }) => {
  return (
    <ContainerSupportNumber>
      <Name>{name}</Name>
      {'   '}
      <a href={`https://wa.me/${numberComplete}`} target="_blank">
        {number}
      </a>
    </ContainerSupportNumber>
  )
}

SupportNumber.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  numberComplete: PropTypes.string,
}

export {
  Container,
  SupportNumber,
  ContainerButton,
  ContainerTitle,
  ContainerFeatures,
  Subtitle,
  ContainerHelpCard,
  ContainerLoader,
  CharacterLimit,
  Hint,
}
