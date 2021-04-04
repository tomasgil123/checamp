import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'
import cx from 'classnames'

import s from './imageGrid.module.scss'

interface ImageGridProps {
  images: string[]
}

const ImageGrid = ({ images }: ImageGridProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

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

  const openLightboxGalleryOnIndex = (index: number): void => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <section
        className={`relative h-64 col-container mt-4 md:mt-6 mb-7 md:h-96 md:mb-8 lg:mb-9 lg:h-120`}
      >
        <div className={`grid md:gap-1 h-full ${containerStyles} md:hidden`}>
          <div className={`overflow-hidden bg-gray-200 relative ${picStyles(0)}`}>
            <Image
              layout="fill"
              src={images[0]}
              objectFit="cover"
              onClick={(): void => setIsOpen(true)}
            />
          </div>
        </div>
        <div className={`hidden md:grid md:gap-1 h-full ${containerStyles} lg:hidden`}>
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className={`overflow-hidden bg-gray-200 relative ${picStyles(index)}`}>
              <Image
                layout="fill"
                src={image}
                objectFit="cover"
                onClick={(): void => openLightboxGalleryOnIndex(index)}
              />
            </div>
          ))}
        </div>
        <div className={`hidden lg:grid lg:gap-1 h-full ${containerStyles}`}>
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className={`overflow-hidden bg-gray-200 relative ${picStyles(index)}`}>
              <Image
                layout="fill"
                src={image}
                objectFit="cover"
                onClick={(): void => openLightboxGalleryOnIndex(index)}
              />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={(): void => setIsOpen(false)}
            onMovePrevRequest={(): void =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={(): void => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
        <button
          className="absolute bottom-0 left-0 m-2 p-2 md:m-4 md:p-4 bg-white rounded"
          onClick={(): void => setIsOpen(true)}
        >
          <span className="text-primary-green font-bold text-sm md:text-base">
            Explorar este vehículo
          </span>
        </button>
      </section>
    </>
  )
}

export default ImageGrid
