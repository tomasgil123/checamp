/* eslint-disable react/display-name */
import cx from 'classnames'

// * Components *
import InsideShower from 'src/components/icons/insideShower'
import OutsideShower from 'src/components/icons/outsideShower'
import Toilet from 'src/components/icons/toilet'
import Refrigerator from 'src/components/icons/refrigerator'
import StoveRange from 'src/components/icons/stoveRange'

// * Types *
import { Amenities as AmenitiesTypes } from 'src/types/vehicleProfile'

const amenitiesIcons = {
  refrigerator: (color: string): JSX.Element => <Refrigerator color={color} />,
  outsideShower: (color: string): JSX.Element => <OutsideShower color={color} />,
  insideShower: (color: string): JSX.Element => <InsideShower color={color} />,
  toilet: (color: string): JSX.Element => <Toilet color={color} />,
  stoveRange: (color: string): JSX.Element => <StoveRange color={color} />,
}

const amenitiesTranlations = {
  outsideShower: 'Ducha externa',
  insideShower: 'Ducha interna',
  toilet: 'Baño',
  refrigerator: 'Heladera',
  stoveRange: 'Hornallas',
}

const createListAmenities = (amenities: any): JSX.Element => {
  return (
    <div>
      {Object.keys(amenities).map((amenity) => (
        <div className="flex flex-row p-2" key={amenity}>
          <div className="w-8 h-8">
            {amenitiesIcons[amenity](amenities[amenity] ? 'black' : 'gray')}
          </div>
          <span className="pl-6 text-sm md:text-base text-black">
            {amenitiesTranlations[amenity]}
          </span>
        </div>
      ))}
    </div>
  )
}

const Amenities = ({
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
}: AmenitiesTypes): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5">
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Amenities</h1>
      <div className="grid grid-cols-2">
        <>
          {createListAmenities({
            outsideShower: outsideShower,
            insideShower: insideShower,
            toilet: toilet,
          })}
        </>
        <>
          {createListAmenities({
            refrigerator: refrigerator,
            stoveRange: stoveRange,
          })}
        </>
      </div>
      <div className="pt-4">
        <button className="w-32 bg-transparent text-black font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
          Ver más
        </button>
      </div>
    </section>
  )
}

export default Amenities
