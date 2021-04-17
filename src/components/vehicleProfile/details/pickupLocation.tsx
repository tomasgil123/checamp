import React from 'react'
import styled from 'styled-components'

const ContainerMap = styled.div`
  height: 0;
  position: relative;
  padding-bottom: 80%;
  overflow: hidden;
  @media (min-width: 720px) {
    padding-bottom: 40%;
  }
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const PickupLocation = ({
  cityGoogleMap,
  city,
}: {
  cityGoogleMap: string
  city: string
}): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5">
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Lugar donde buscar el RV</h1>
      <div className="text-base md:text-lg text-black font-medium pb-4">
        <span>{city}</span>
      </div>
      <ContainerMap>
        <iframe
          src={cityGoogleMap}
          width={'1000'}
          height={'400'}
          frameBorder={'0'}
          style={{ border: '0' }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </ContainerMap>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default PickupLocation
