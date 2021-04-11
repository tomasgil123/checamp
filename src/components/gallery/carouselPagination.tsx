import { RenderPaginationProps } from 'react-elastic-carousel'
import styled from 'styled-components'
import { colors, space } from 'src/tokens'

interface DotProps {
  activePage: boolean
  firstGradeClose: boolean
  secondGradeClose: boolean
}

const DotSize = ({ activePage, firstGradeClose, secondGradeClose }: DotProps): string => {
  if (activePage) {
    return '10px'
  } else {
    if (firstGradeClose) {
      return '8px'
    }
    if (secondGradeClose) {
      return '6px'
    }
    return '0px'
  }
}

const DotDisplay = ({ activePage, firstGradeClose, secondGradeClose }: DotProps): string => {
  if (activePage || firstGradeClose || secondGradeClose) {
    return 'inline-block'
  } else {
    return 'none'
  }
}

const Dot = styled.div`
  display: ${({ activePage, firstGradeClose, secondGradeClose }: DotProps): string =>
    DotDisplay({ activePage, firstGradeClose, secondGradeClose })};
  cursor: pointer;
  border-radius: 50%;
  border: ${({ activePage }: DotProps): string =>
    activePage ? `1px solid ${colors.base.primaryGreen}` : `1px solid ${colors.base.gray}`};
  margin: ${space.s1};
  height: ${({ activePage, firstGradeClose, secondGradeClose }: DotProps): string =>
    DotSize({ activePage, firstGradeClose, secondGradeClose })};
  width: ${({ activePage, firstGradeClose, secondGradeClose }: DotProps): string =>
    DotSize({ activePage, firstGradeClose, secondGradeClose })};
  transition-timing-function: linear;
  background-color: ${({ activePage }: DotProps): string =>
    activePage ? `${colors.base.primaryGreen}` : `${colors.base.gray}`};
  transform: ${({ activePage }: DotProps): string => (activePage ? `scale(1.3)` : `scale(1)`)};
`

const CarouselPagination = ({ pages, activePage, onClick }: RenderPaginationProps): JSX.Element => {
  return (
    <div style={{ position: 'absolute', bottom: '0' }}>
      {pages.map((page) => {
        const diff = activePage - page
        return (
          <Dot
            key={page}
            activePage={activePage === page}
            firstGradeClose={diff === 1 || diff === -1}
            secondGradeClose={diff === 2 || diff === -2}
            onClick={(): void => onClick(`${page}`)}
          />
        )
      })}
    </div>
  )
}

export default CarouselPagination
