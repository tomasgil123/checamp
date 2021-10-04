import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

import { colors } from 'src/tokens'

import Gallery from 'src/components/gallery'
import { Title, Subtitle, Price, PerNight, ImageWrapper, TextWrapper } from './components'

import { Vehicle } from 'src/types/vehicleCard'

interface VehicleCardProps {
  data: Vehicle
}

const VehicleCard = ({ data }: VehicleCardProps): JSX.Element => {
  const {
    titleListing,
    RVManufactureDate,
    city,
    spaceForPassengers,
    spaceForSleepers,
    pricePerDay,
    mainImages,
  } = data
  const stylesParentGallery = {
    position: 'relative',
    height: '0',
    width: '100%',
    paddingBottom: '58%',
    background: colors.base.white,
  }

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Link key={data.id} href={`/motorhome/${data.id}`}>
      <a>
        <div ref={ref}>
          <Gallery
            images={mainImages}
            imageComponent={(image: string): JSX.Element => (
              <ImageWrapper>
                {inView && <Image src={image} alt="RV image" layout="fill" objectFit="cover" />}
              </ImageWrapper>
            )}
            stylesParentGallery={stylesParentGallery}
          />
        </div>
        <TextWrapper>
          <Title>{titleListing}</Title>
          <div>
            <Subtitle>{RVManufactureDate}</Subtitle>
            <Subtitle style={{ paddingLeft: '4px', paddingRight: '4px' }}>-</Subtitle>
            <Subtitle>{city}</Subtitle>
          </div>
          <div>
            <Subtitle>{`Pasajeros: ${spaceForPassengers}`}</Subtitle>
            <Subtitle style={{ paddingLeft: '4px', paddingRight: '4px' }}>-</Subtitle>
            <Subtitle>{`Huéspedes: ${spaceForSleepers}`}</Subtitle>
          </div>
          <div className="flex flex-row items-center">
            {pricePerDay ? (
              <>
                <Price>{`$${pricePerDay}`}</Price>&nbsp;<PerNight> / por noche</PerNight>
              </>
            ) : (
              <PerNight>Consultar precio</PerNight>
            )}
          </div>
        </TextWrapper>
      </a>
    </Link>
  )
}

export default VehicleCard
