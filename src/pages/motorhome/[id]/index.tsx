import React, { FC } from 'react'
import { useRouter } from 'next/router'
import * as Sentry from '@sentry/react'

// * Components *
import Layout from 'src/components/layout'
import ImageGrid from 'src/components/vehicleProfile/imageGrid'
import Overview from 'src/components/vehicleProfile/overView'
import Space from 'src/components/vehicleProfile/details/space'
import Amenities from 'src/components/vehicleProfile/details/amenities'
import OwnerRules from 'src/components/vehicleProfile/details/ownerRules'
import PickupLocation from 'src/components/vehicleProfile/details/pickupLocation'
import Price from 'src/components/vehicleProfile/details/price'

// * Types *
import PageWithLayout from 'src/types/pageWithLayout'
import { Vehicle } from 'src/types/vehicleProfile'
import { GetStaticProps, GetStaticPaths } from 'next'

// * Utils *
import { getAllRvIds, getRv } from 'src/services/rvs/index'

interface RVProps {
  rv: Vehicle
}

const RV: FC<RVProps> = ({ rv }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div className="p-6 font-normal text-base">Loading...</div>
  }
  console.log('rv', rv.mainImages)
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
    pricePerDay,
    priceExtra,
    id,
    DriverMinimumAge,
  } = rv

  const onCheckAvailability = (): void => {
    router.push({
      pathname: '/inquilinos/intro',
      query: { rvId: id },
    })
  }

  return (
    <div>
      <ImageGrid images={images} />
      <div className="px-4 md:px-6 w-full lg:grid lg:grid-cols-6">
        <div className="w-full lg:col-start-1 lg:col-end-5">
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
              DriverMinimumAge,
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
          <Price pricePerDay={pricePerDay} priceExtra={priceExtra} id={id} />
          <PickupLocation cityGoogleMap={cityGoogleMap} city={city} />
          <div className="sticky bottom-0 w-full bg-white lg:hidden p-4">
            <div className="relative w-full flex">
              {pricePerDay && (
                <div className="text-base md:text-lg lg:text-2xl text-black font-medium pb-4">
                  <span>
                    Precio por día: <span className="font-normal">{pricePerDay}</span>
                  </span>
                </div>
              )}
              <button
                className="p-2 md:p-4 bg-primary-green rounded ml-auto"
                onClick={(): void => onCheckAvailability()}
              >
                <span className="text-white font-bold text-sm md:text-base">
                  Consultar disponibilidad
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-start-5 lg:col-end-7">
          <div className="sticky top-24 w-80 h-36 p-4 md:p-6 lg:p-8 shadow-lg rounded-lg m-auto">
            <div className="flex flex-col justify-center w-full h-full items-center">
              {pricePerDay && (
                <div className="text-base md:text-lg lg:text-2xl text-black font-medium pb-4">
                  <span>
                    Precio por día: <span className="font-normal">{pricePerDay}</span>
                  </span>
                </div>
              )}
              <button
                className="p-2 md:p-4 bg-primary-green rounded"
                onClick={(): void => onCheckAvailability()}
              >
                <span className="text-white font-bold text-sm md:text-base">
                  Consultar disponibilidad
                </span>
              </button>
            </div>
          </div>
        </div>
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
  let rv
  try {
    rv = await getRv(params.id as string)
  } catch (err) {
    Sentry.captureException(err, {
      tags: {
        section: 'rv/[id]',
      },
    })
  }

  return {
    props: {
      rv: rv.data[0],
    },
    revalidate: 60 * 60 * 24,
  }
}
