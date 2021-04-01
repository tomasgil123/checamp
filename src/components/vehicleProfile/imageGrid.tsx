import Image from 'next/image'
import cx from 'classnames'

import s from './vehicleProfile.module.scss'

interface ImageGridProps {
  images: string[]
}

const ImageGrid = ({ images }: ImageGridProps): JSX.Element => {
  const containerStyles = cx(
    'grid gap-1 h-full',
    { [s.photoGridContainerOnePic]: images.length === 1 },
    { [s.photoGridContainerTwoPics]: images.length === 2 },
    { [s.photoGridContainerThreePics]: images.length === 3 },
    { [s.photoGridContainer]: images.length >= 4 }
  )

  const picStyles = (index: number): string =>
    cx(
      'overflow-hidden bg-gray-200 relative',
      { [s.firstPic]: index === 0 },
      { [s.secondPic]: index === 1 },
      { [s.thirdPic]: index === 2 },
      { [s.fourthPic]: index === 3 }
    )

  return (
    <section className="relative h-64 col-container mt-4 md:mt-6 mb-7 md:h-88 md:mb-8 lg:h-120 lg:mb-9">
      <div className={`grid gap-1 h-full ${containerStyles}`}>
        {images.map((image, index) => (
          <div key={index} className={`overflow-hidden bg-gray-200 relative ${picStyles(index)}`}>
            <Image layout="fill" src={`/${images[index]}`} objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageGrid
