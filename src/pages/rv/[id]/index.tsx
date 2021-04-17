import React, { FC } from 'react'

// * Components *
import Layout from 'src/components/layout'
import ImageGrid from 'src/components/vehicleProfile/imageGrid'
import Overview from 'src/components/vehicleProfile/overView'
import Space from 'src/components/vehicleProfile/details/space'
import Amenities from 'src/components/vehicleProfile/details/amenities'
import OwnerRules from 'src/components/vehicleProfile/details/ownerRules'
import PickupLocation from 'src/components/vehicleProfile/details/pickUpLocation'

// * Types *
import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleProfile'
import { GetStaticProps, GetStaticPaths } from 'next'

// * Utils *
import { getAllRvIds, getRv } from 'src/services/index'

interface RVProps {
  rv: Vehicle
}

const RV: FC<RVProps> = ({ rv }) => {
  const {
    images,
    titleListing,
    descriptionListing,
    RvType,
    RVBrand,
    RVModel,
    RVManufactureDate,
    spaceForPassengers,
    spaceForSleepers,
    city,
    refrigerator,
    kitchenSink,
    diningTable,
    microwave,
    stoveRange,
    oven,
    airConditioner,
    heater,
    insideShower,
    toilet,
    satellite,
    ceilingFan,
    awning,
    generator,
    outsideShower,
    towHitch,
    bikeRack,
    solar,
    backupCamera,
    extraStorage,
    washerDryer,
    inverter,
    handicapAccesible,
    tvDvd,
    audioInputs,
    radio,
    wifi,
    pets,
    tailgating,
    festivals,
    smoking,
    cityGoogleMap,
  } = rv
  return (
    <div>
      <ImageGrid images={images} />
      <div className="px-4 md:px-6 w-full lg:grid lg:grid-cols-6">
        <Overview
          {...{
            titleListing,
            descriptionListing,
            RvType,
            RVBrand,
            RVModel,
            RVManufactureDate,
            spaceForPassengers,
            spaceForSleepers,
            city,
          }}
        />
        <Space {...{ spaceForPassengers, spaceForSleepers }} />
        <Amenities
          amenities={{
            ...{
              refrigerator,
              kitchenSink,
              diningTable,
              microwave,
              stoveRange,
              oven,
              airConditioner,
              heater,
              insideShower,
              toilet,
              satellite,
              ceilingFan,
              awning,
              generator,
              outsideShower,
              towHitch,
              bikeRack,
              solar,
              backupCamera,
              extraStorage,
              washerDryer,
              inverter,
              handicapAccesible,
              tvDvd,
              audioInputs,
              radio,
              wifi,
            },
          }}
        />
        <OwnerRules {...{ pets, tailgating, festivals, smoking }} />
        <PickupLocation cityGoogleMap={cityGoogleMap} city={city} />
      </div>
    </div>
  )
}

;(RV as PageWithLayout<RVProps>).layout = Layout

export default RV

// we have to convert id to a string because otherwise we got a typescript error
// https://github.com/vercel/next.js/discussions/16522

export const getStaticPaths: GetStaticPaths = async () => {
  const result = getAllRvIds()
  const rvIds = (await result).data.map((id) => {
    return { params: { id: id.id.toString() } }
  })
  return {
    paths: rvIds,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const rv = await getRv(params.id as string)

  return {
    props: {
      rv: rv.data[0],
    },
  }
}
