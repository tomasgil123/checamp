import { useState } from 'react'
import CarouselElastic, { ItemObject } from 'react-elastic-carousel'

import CarouselPagination from './carouselPagination'

import { StylesParentGallery } from 'src/types/gallery'

type GalleryProps = {
  images: string[]
  imageComponent: (srcImage: string) => JSX.Element
  stylesParentGallery: StylesParentGallery
  arrowComponent?: () => JSX.Element
}

const Gallery = ({
  images,
  imageComponent,
  stylesParentGallery,
  arrowComponent = (): JSX.Element => <></>,
}: GalleryProps): JSX.Element => {
  const items = [...images]

  const [indexImagesLoaded, setIndexImagesLoaded] = useState([0, 1])

  const onChange = ({ index }: ItemObject): void => {
    if (!indexImagesLoaded.includes(index + 1) && items.length - 1 !== index) {
      setIndexImagesLoaded([...indexImagesLoaded, index + 1])
    }
  }

  const handleChange = (next: ItemObject): void => {
    onChange(next)
  }

  return (
    <div style={stylesParentGallery as React.CSSProperties}>
      <CarouselElastic
        itemsToScroll={1}
        isRTL={false}
        itemsToShow={1}
        className="relative"
        renderPagination={CarouselPagination}
        renderArrow={arrowComponent}
        onNextStart={handleChange}
        onPrevStart={handleChange}
        onChange={(object, index): void => onChange({ index, object })}
      >
        {items.map((item, index) => (
          <div key={item} style={{ width: '100%' }}>
            {indexImagesLoaded.includes(index) ? <>{imageComponent(item)}</> : null}
          </div>
        ))}
      </CarouselElastic>
    </div>
  )
}

export default Gallery
