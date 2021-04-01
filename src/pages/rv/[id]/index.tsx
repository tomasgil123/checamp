import React, { FC } from 'react'

import Layout from 'src/components/layout'
import ImageGrid from 'src/components/vehicleProfile/imageGrid'

import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleProfile'
import { GetStaticProps, GetStaticPaths } from 'next'

import data from 'src/data/mockVehicles.json'

interface RVProps {
  vehicle: Vehicle
}

const RV: FC<RVProps> = ({ vehicle }) => {
  const { images } = vehicle
  return (
    <div>
      <ImageGrid images={images} />
    </div>
  )
}

;(RV as PageWithLayout).layout = Layout

export default RV

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const vehicle = data.vehicles.find((vehicle) => vehicle.id === params.id)

  return {
    props: {
      vehicle,
    },
  }
}
