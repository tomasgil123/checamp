/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'
import { space } from 'src/tokens'
import PropTypes from 'prop-types'

const ImgIconContainer = styled.div`
  img {
    height: auto;
    width: ${space.s5};
  }
`

const Container = styled.div`
  padding: ${space.s2};
`

const SocialNetworkIcon = ({ imgLink, socialNetworkLink }) => {
  return (
    <Container>
      <a href={`${socialNetworkLink}`} target="_blank">
        <ImgIconContainer>
          <img src={imgLink} alt="social-network" />
        </ImgIconContainer>
      </a>
    </Container>
  )
}

SocialNetworkIcon.propTypes = {
  imgLink: PropTypes.string,
  socialNetworkLink: PropTypes.string,
}

export default SocialNetworkIcon
