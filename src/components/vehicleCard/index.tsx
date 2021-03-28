import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { colors, space } from 'src/tokens'

import Gallery from 'src/components/gallery'

const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 60%;
  background: ${colors.base.backgroundGray};
  border-radius: ${space.s1};
  div {
    border-radius: ${space.s1};
  }
  img {
    overflow: hidden;
  }
`

const VehicleCard = (): JSX.Element => {
  const stylesParentGallery = {
    position: 'relative',
    height: '0',
    width: '100%',
    paddingBottom: '58%',
    background: colors.base.white,
  }

  return (
    <div>
      <Gallery
        images={[
          'rv-rental-1.jpeg',
          'rv-rental-2.jpeg',
          'rv-rental-3.jpeg',
          'rv-rental-4.jpeg',
          'rv-rental-5.jpeg',
        ]}
        imageComponent={(image: string): JSX.Element => (
          <ImageWrapper>
            <Image src={`/${image}`} alt="RV image" layout="fill" objectFit="cover" />
          </ImageWrapper>
        )}
        stylesParentGallery={stylesParentGallery}
      />
    </div>
  )
}

export default VehicleCard
