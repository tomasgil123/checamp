import { useRouter } from 'next/router'
import styled from 'styled-components'

// * Components *
import Link from 'next/link'
import { Container, Title } from './general'
import VehicleCard from 'src/components/vehicleCard'

import { space, breakpoints } from 'src/tokens'

// * Types *
import { Vehicle } from 'src/types/vehicleCard'

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
    padding-left: ${space.s16};
    padding-right: ${space.s16};
    max-width: ${breakpoints.lg};
    margin: auto;
  }
`

interface SearchProps {
  rvsShowcase: Vehicle[]
}

const Search = ({ rvsShowcase }: SearchProps): JSX.Element => {
  const router = useRouter()
  const onClickVehicleCard = (vehicleId: number): void => {
    router.push(`/rv/${vehicleId}`)
  }
  return (
    <Container>
      <Title>Encontra el RV para tus proximas vacaciones</Title>
      <ContainerVehicleCards>
        {rvsShowcase.map((rv) => (
          <VehicleCard key={rv.id} data={rv} onClickVehicleCard={onClickVehicleCard} />
        ))}
      </ContainerVehicleCards>
      <div className="flex justify-center pt-8">
        <button className="p-2 md:p-4 bg-primary-green rounded w-60 md:w-64">
          <Link href="/rv-en-alquiler">
            <a className="text-white font-normal text-sm md:text-base">
              Ver todos los Rvs en alquiler
            </a>
          </Link>
        </button>
      </div>
    </Container>
  )
}

export default Search
