import React from 'react'
import Image from 'next/image'

import { colors } from 'src/tokens'

import Gallery from 'src/components/gallery'
import { Title, Subtitle, Price, PerNight, ImageWrapper, TextWrapper } from './components'

import { Vehicle } from 'src/types/vehicleCard'

interface VehicleCardProps {
  data: Vehicle
  onClickVehicleCard: (vehicleId: string) => void
}

const VehicleCard = ({ data, onClickVehicleCard }: VehicleCardProps): JSX.Element => {
  const { title, year, city, passengers, guests, price, images, id } = data
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
        images={images}
        imageComponent={(image: string): JSX.Element => (
          <ImageWrapper>
            <Image src={`/${image}`} alt="RV image" layout="fill" objectFit="cover" />
          </ImageWrapper>
        )}
        stylesParentGallery={stylesParentGallery}
      />
      <TextWrapper>
        <Title>{title}</Title>
        <div>
          <Subtitle>{year}</Subtitle>
          <Subtitle style={{ paddingLeft: '4px', paddingRight: '4px' }}>-</Subtitle>
          <Subtitle>{city}</Subtitle>
        </div>
        <div>
          <Subtitle>{`Pasajeros: ${passengers}`}</Subtitle>
          <Subtitle style={{ paddingLeft: '4px', paddingRight: '4px' }}>-</Subtitle>
          <Subtitle>{`Huéspedes: ${guests}`}</Subtitle>
        </div>
        <div>
          <Price>{`$${price}`}</Price>
          <PerNight>/ por noche</PerNight>
        </div>
      </TextWrapper>
    </div>
  )
}

export default VehicleCard
