/* eslint-disable react/display-name */
import cx from 'classnames'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Link from 'next/link'

// * Components *
import InsideShower from 'src/components/icons/insideShower'
import OutsideShower from 'src/components/icons/outsideShower'
import Toilet from 'src/components/icons/toilet'
import Refrigerator from 'src/components/icons/refrigerator'
import StoveRange from 'src/components/icons/stoveRange'
import AirConditioner from 'src/components/icons/aitConditioner'
const Modal = dynamic(() => import('src/components/modal'))

// * Types *
import { Amenities as AmenitiesTypes } from 'src/types/vehicleProfile'

import { amenitiesGrouped } from './utils'

const amenitiesIcons = {
  refrigerator: (color: string): JSX.Element => <Refrigerator color={color} />,
  outsideShower: (color: string): JSX.Element => <OutsideShower color={color} />,
  insideShower: (color: string): JSX.Element => <InsideShower color={color} />,
  toilet: (color: string): JSX.Element => <Toilet color={color} />,
  stoveRange: (color: string): JSX.Element => <StoveRange color={color} />,
  airConditioner: (color: string): JSX.Element => <AirConditioner color={color} />,
}

const amenitiesTranlations = {
  outsideShower: 'Ducha externa',
  insideShower: 'Ducha interna',
  toilet: 'Baño',
  refrigerator: 'Heladera',
  stoveRange: 'Hornallas',
  airConditioner: 'Aire acondicionado',
}

const createListAmenities = (amenities: any): JSX.Element => {
  const stylesNameAmenity = (isAvailable: boolean): string =>
    cx('pl-6 text-sm md:text-base text-black', { 'line-through': !isAvailable })
  return (
    <div>
      {Object.keys(amenities).map((amenity) => (
        <div className="flex flex-row p-2" key={amenity}>
          <div className="w-8 h-8">
            {amenitiesIcons[amenity](amenities[amenity] ? 'text-black' : 'text-gray-500')}
          </div>
          <span className={stylesNameAmenity(amenities[amenity])}>
            {amenitiesTranlations[amenity]}
          </span>
        </div>
      ))}
    </div>
  )
}

const Amenities = ({ amenities }: AmenitiesTypes): JSX.Element => {
  const {
    refrigerator,
    stoveRange,
    airConditioner,
    insideShower,
    toilet,
    outsideShower,
  } = amenities
  const router = useRouter()

  const itemListAmenitiesStyles = (isAvailable: boolean): string => {
    return cx('text-base font-normal py-2', {
      'text-black': isAvailable,
      'text-gray-500 line-through': !isAvailable,
    })
  }

  return (
    <section>
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
            airConditioner: airConditioner,
          })}
        </>
      </div>
      <div className="pt-4">
        <Link
          href={`${router.route.replace('[id]', router.query.id as string)}?amenities=true`}
          shallow
        >
          <a className="w-32 bg-transparent text-black font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
            Ver más
          </a>
        </Link>
      </div>
      <Modal queryParam="amenities">
        <div className="p-4 flex flex-col justify-start w-full">
          <div className="font-bold pt-6 text-lg md:text-xl pb-4 text-black"> Amenities</div>
          {amenitiesGrouped.map(({ typeAmenity, items }) => (
            <div key={typeAmenity}>
              <div className="text-lg font-medium py-4 text-black">{typeAmenity}</div>
              {items.map((amenity) => (
                <div key={amenity.name}>
                  <div className={itemListAmenitiesStyles(amenities[amenity.name])}>
                    {amenity.label}
                  </div>
                  <div className="border-b border-gray-200 border-solid my-2 md:my-3 w-full"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Modal>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default Amenities
