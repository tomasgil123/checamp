import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, space } from 'src/tokens'

const ContainerItem = styled.div`
  padding: ${space.s12};
  text-align: center;
  max-width: 400px;
  div {
    color: ${colors.base.primary};
    font-size: ${space.s5};
    font-weight: 300;
  }
`

const ImageItem = styled.img`
  width: 100px;
`

const Item = ({ text, icon }) => {
  return (
    <ContainerItem>
      <ImageItem src={icon} alt="" />
      <div>{text}</div>
    </ContainerItem>
  )
}

Item.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
}

export default Item
