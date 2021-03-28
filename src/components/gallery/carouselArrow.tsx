import { RenderArrowProps } from 'react-elastic-carousel'

const CarouselArrow = ({ type, onClick }: RenderArrowProps): JSX.Element => {
  const isPrev = type === 'PREV'
  const arrowClassName = cx('cursor-pointer z-10 absolute bg-white hidden rounded-sm top-2/4', {
    [s.prev]: isPrev,
    [s.next]: !isPrev,
  })
  const img = {
    className: arrowClassName,
    src: `/static/img/blue-arrow-${isPrev ? 'prev' : 'next'}.svg`,
  }
  return (
    <button onClick={onClick} tabIndex={0} aria-label={isPrev ? 'prev' : 'next'}>
      <img {...img} alt={type} />
    </button>
  )
}

export default CarouselArrow
