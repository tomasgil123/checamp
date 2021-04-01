import styled from 'styled-components'
import Image from 'next/image'
import { colors, space, breakpoints } from 'src/tokens'

const ContainerImages = styled.div`
  grid-template-columns: 1fr;
  grid-template-areas: 'image-1';
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'image-1 image-2'
      'image-1 image-3';
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 50% 1fr 1fr;
    grid-template-areas:
      'image-1 image-2 image-4'
      'image-1 image-3 image-4';
  }
`

const ImageGrid = (): JSX.Element => {
  return <div></div>
}

export default ImageGrid
