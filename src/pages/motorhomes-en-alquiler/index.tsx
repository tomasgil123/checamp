import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'

import { space, breakpoints } from 'src/tokens'

// * Components *
import Link from 'next/link'
import Layout from 'src/components/layout'
import VehicleCard from 'src/components/vehicleCard'
import FilterIcon from 'src/components/icons/filter.svg'
const Modal = dynamic(() => import('src/components/modal'))
import Filters from 'src/components/search/filters'

// * Types *
import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleCard'

// * Utils *
import { getAllRvs } from 'src/services/rvs/index'

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
    router.push(`/motorhome/${vehicleId}`)
  }

  const [showModalFilters, setShowModalFilters] = useState(false)

  const [rvsToShow, setRvsToShow] = useState(rvs)

  const [atLeastOneFilterIsApplied, setatLeastOneFilterIsApplied] = useState(false)

  const filterStyles = cx(
    'w-full mb-4 p-4 flex flex-row sticky z-50 bg-white border-b border-gray-500 md:z-40 top-14 border-opacity-10',
    { hidden: showModalFilters }
  )

  const onApplyFilters = (typeRvFilter: string[], cityFilter: string): void => {
    const filters = {
      typeRv: (rv: Vehicle): boolean => typeRvFilter.includes(rv.RvType),
      city: (rv: Vehicle): boolean => rv.city === cityFilter,
    }
    const filtersToApply = []
    if (typeRvFilter[0]) {
      filtersToApply.push(filters.typeRv)
      setatLeastOneFilterIsApplied(true)
    }
    if (cityFilter) {
      filtersToApply.push(filters.city)
      setatLeastOneFilterIsApplied(true)
    }

    setRvsToShow(rvs.filter((item) => filtersToApply.every((filter) => filter(item))))
    setShowModalFilters(false)
  }

  const onCleanFilters = (): void => {
    setRvsToShow(rvs)
    setatLeastOneFilterIsApplied(false)
  }

  return (
    <>
      <div className={filterStyles}>
        <span className="text-black lg:text-lg text-base font-bold">Filtros</span>
        <div className="ml-auto flex flex-row">
          {atLeastOneFilterIsApplied && (
            <span className="pr-4 cursor-pointer" onClick={onCleanFilters}>
              Limpiar filtros
            </span>
          )}
          <div className="border-l  border-opacity-10 border-gray-500 pl-2">
            <img
              className="w-6 h-6 lg:w-8 lg:h-8"
              onClick={(): void => setShowModalFilters(true)}
              src={FilterIcon}
            />
          </div>
        </div>
      </div>
      <Wrapper>
        <div className="text-base font-normal text-black pb-6 px-4">
          ¿Tenés un motorhome para alquilar?{' '}
          <Link href="/propietarios/tipo-de-vehiculo">
            <a className="text-blue-600">Alquilar mi motorhome o RV</a>
          </Link>
        </div>
        <ContainerVehicleCards>
          {rvsToShow.map((rv) => (
            <VehicleCard key={rv.id} data={rv} onClickVehicleCard={onClickVehicleCard} />
          ))}
        </ContainerVehicleCards>
      </Wrapper>
      <Modal openModal={showModalFilters} closeModal={(): void => setShowModalFilters(false)}>
        <Filters applyFilters={onApplyFilters} />
      </Modal>
    </>
  )
}

;(RVRental as PageWithLayout<RVRentalProps>).layout = Layout

export async function getStaticProps(): Promise<unknown> {
  const response = await getAllRvs()
  const rvs = response.data
  return {
    props: { rvs: rvs },
    revalidate: 60 * 60,
  }
}

export default RVRental
