import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { space, breakpoints } from 'src/tokens'

// * Components *
import Layout from 'src/components/layout'
import VehicleCard from 'src/components/vehicleCard'

// * Types *
import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleCard'

// * Utils *
import { getAllRvs } from 'src/services/index'

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

interface RVRentalProps {
  rvs: Vehicle[]
}

const RVRental: FC<RVRentalProps> = ({ rvs }) => {
  const router = useRouter()
  const onClickVehicleCard = (vehicleId: number): void => {
    router.push(`/rv/${vehicleId}`)
  }

  return (
    <Wrapper>
      <ContainerVehicleCards>
        {rvs.map((rv) => (
          <VehicleCard key={rv.id} data={rv} onClickVehicleCard={onClickVehicleCard} />
        ))}
      </ContainerVehicleCards>
    </Wrapper>
  )
}

;(RVRental as PageWithLayout<RVRentalProps>).layout = Layout

export async function getStaticProps(): Promise<unknown> {
  const response = await getAllRvs()
  const rvs = response.data
  return {
    props: { rvs: rvs },
  }
}

export default RVRental
