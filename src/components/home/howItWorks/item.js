import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, space } from 'src/tokens'

const ContainerItem = styled.div`
  padding-top: ${space.s12};
  padding-left: ${space.s12};
  padding-right: ${space.s12};
  text-align: center;
  max-width: 400px;
  flex: 1;
  div {
    color: ${colors.base.primary};
    font-size: ${space.s5};
    font-weight: 300;
  }
`

const ContainerImage = styled.div`
  height: 100px;
  position: relative;
  top: ${(props) => (props.topPx ? props.topPx : `0px`)};
`

const ImageItem = styled.img`
  width: 100px;
`

const Item = ({ text, icon, topPx }) => {
  return (
    <ContainerItem>
      <ContainerImage topPx={topPx}>
        <ImageItem src={icon} alt="" />
      </ContainerImage>
      <div>{text}</div>
    </ContainerItem>
  )
}

Item.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  topPx: PropTypes.string,
}

export default Item
