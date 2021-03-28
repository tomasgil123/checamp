import React, { FC } from 'react'
import styled from 'styled-components'

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
`

const RVRental: FC = () => {
  return (
    <div>
      <div>Rv rental</div>
      <VehicleCard />
      {/* <ContainerVehicleCards>
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </ContainerVehicleCards> */}
    </div>
  )
}

;(RVRental as PageWithLayout).layout = Layout

export default RVRental
