import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, space, breakpoints } from 'src/tokens'

import OptimizedImage from 'src/components/primitives/optimizedImg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${space.s16};
  margin-bottom: ${space.s16};
  @media (min-width: ${breakpoints.md}) {
    flex-direction: ${(props) => props.rowDirection};
    height: 400px;
  }
  @media (min-width: ${breakpoints.lg}) {
    height: 450px;
  }
`

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.s6};
  background: ${colors.base.primaryLightBlue};
  height: 300px;
  width: 100%;
  border-radius: 10px;
  @media (min-width: ${breakpoints.md}) {
    height: 100%;
    flex: 1;
  }
`

const ContainerImage = styled.div`
  height: 300px;
  margin-bottom: ${space.s6};
  @media (min-width: ${breakpoints.md}) {
    height: 100%;
    flex: 2;
  }
  div:nth-child(2) {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

const Divider = styled.div`
  display: none;
  width: ${space.s8};
  @media (min-width: ${breakpoints.md}) {
    display: inherit;
  }
`

const Item = ({ text, srcImg, rowDirection }) => {
  return (
    <Container rowDirection={rowDirection}>
      <ContainerImage>
        <OptimizedImage srcImg={srcImg} />
      </ContainerImage>
      <Divider />
      <ContainerText>{text}</ContainerText>
    </Container>
  )
}

Item.propTypes = {
  text: PropTypes.string,
  srcImg: PropTypes.string,
  rowDirection: PropTypes.string,
}

export default Item
