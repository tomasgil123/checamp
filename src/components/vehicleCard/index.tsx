import React from 'react'
import Image from 'next/image'

import { colors } from 'src/tokens'

import Gallery from 'src/components/gallery'
import { Title, Subtitle, Price, PerNight, ImageWrapper, TextWrapper } from './components'

import { Vehicle } from 'src/types/vehicleCard'

interface VehicleCardProps {
  data: Vehicle
  onClickVehicleCard: (vehicleId: number) => void
}

const VehicleCard = ({ data, onClickVehicleCard }: VehicleCardProps): JSX.Element => {
  const {
    titleListing,
    RVManufactureDate,
    city,
    spaceForPassengers,
    spaceForSleepers,
    pricePerDay,
    mainImages,
    id,
  } = data
  const stylesParentGallery = {
    position: 'relative',
    height: '0',
    width: '100%',
    paddingBottom: '58%',
    background: colors.base.white,
  }

  return (
    <div className="cursor-pointer" onClick={(): void => onClickVehicleCard(id)}>
      <Gallery
        images={mainImages}
        imageComponent={(image: string): JSX.Element => (
          <ImageWrapper>
            <Image src={image} alt="RV image" layout="fill" objectFit="cover" />
          </ImageWrapper>
        )}
        stylesParentGallery={stylesParentGallery}
      />
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
        <div>
          {pricePerDay ? (
            <>
              <Price>{`$${pricePerDay}`}</Price>
              <PerNight>/ por noche</PerNight>
            </>
          ) : (
            <PerNight>Consultar precio</PerNight>
          )}
        </div>
      </TextWrapper>
    </div>
  )
}

export default VehicleCard