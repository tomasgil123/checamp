import styled from 'styled-components'
import { space, colors, breakpoints } from 'src/tokens'
import PropTypes from 'prop-types'
import { typesOfRV } from 'src/utils/owners'

const ContainerRVBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
  }
`

const RVBox = styled.div`
  height: ${space.s32};
  width: ${space.s32};
  border: ${(props) =>
    props.chosen ? `2px solid ${colors.base.secondaryGreen}` : `1px solid ${colors.base.borders}`};
  border-radius: 4px;
  color: ${colors.base.primaryGreen};
  cursor: pointer;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  margin: ${space.s3};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 2px solid ${colors.base.secondaryGreen};
  }
`

function RVOptions({ typeRV, addTypeOfRV, goToNextStep }) {
  const onChooseTypeRV = (typeOfRV) => {
    addTypeOfRV(typeOfRV)
    goToNextStep()
  }

  return (
    <ContainerRVBoxes>
      {typesOfRV.map((typeOfRV) => (
        <RVBox
          onClick={() => onChooseTypeRV(typeOfRV.name)}
          key={typeOfRV.name}
          chosen={typeRV === typeOfRV.name}
        >
          <img src={typeOfRV.link} alt={typeOfRV.name} />
          <span>{typeOfRV.name}</span>
        </RVBox>
      ))}
    </ContainerRVBoxes>
  )
}

RVOptions.propTypes = {
  typeRV: PropTypes.string,
  addTypeOfRV: PropTypes.func,
  goToNextStep: PropTypes.func,
}

export default RVOptions
