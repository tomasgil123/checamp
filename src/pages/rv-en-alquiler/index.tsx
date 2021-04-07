import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { space, breakpoints } from 'src/tokens'

import Layout from 'src/components/layout'
import VehicleCard from 'src/components/vehicleCard'

import PageWithLayout from 'src/types/pageWithLayout'

const ContainerVehicleCards = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  gap: 1.25rem;
  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const Wrapper = styled.div`
  padding-top: ${space.s6};
  padding-bottom: ${space.s6};
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  max-width: ${breakpoints.xl};
  margin: auto;
`

const data = [
  {
    title: 'Overland 4x4',
    id: '1',
    year: '2018',
    city: 'Capital Federal',
    passengers: '2',
    guests: '2',
    price: '3000',
    images: [
      'rv-rental-1.jpeg',
      'rv-rental-2.jpeg',
      'rv-rental-3.jpeg',
      'rv-rental-4.jpeg',
      'rv-rental-5.jpeg',
    ],
  },
  {
    title: 'Compacto',
    id: '2',
    year: '2015',
    city: 'Bariloche',
    passengers: '2',
    guests: '2',
    price: '2000',
    images: [
      'rv-rental-2.jpeg',
      'rv-rental-3.jpeg',
      'rv-rental-4.jpeg',
      'rv-rental-5.jpeg',
      'rv-rental-1.jpeg',
    ],
  },
]

const RVRental: FC = () => {
  const router = useRouter()
  const onClickVehicleCard = (vehicleId: string): void => {
    router.push(`/rv/${vehicleId}`)
  }

  return (
    <Wrapper>
      <ContainerVehicleCards>
        {data.map((car) => (
          <VehicleCard key={car.title} data={car} onClickVehicleCard={onClickVehicleCard} />
        ))}
      </ContainerVehicleCards>
    </Wrapper>
  )
}

;(RVRental as PageWithLayout).layout = Layout

export default RVRental
