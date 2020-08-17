import styled from 'styled-components'
import { space, colors, breakpoints } from 'src/tokens'

// eslint-disable-next-line import/prefer-default-export
export const WrapperSubmitSection = styled.div`
  width: 100%;
  height: ${space.s24};
  background-color: ${colors.base.white};
  z-index: 9;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid ${colors.base.borders};
`

export const ContainerSubmitButton = styled.div`
  padding-top: ${space.s4};
  padding-bottom: ${space.s6};
  padding-right: ${space.s4};
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  background-color: ${colors.base.white};
  z-index: 10;
  position: fixed;
  bottom: 0px;
  button {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    button {
      width: 100%;
    }
  }
`
