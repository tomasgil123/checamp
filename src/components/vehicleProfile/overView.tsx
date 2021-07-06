import { OverviewSection } from 'src/types/vehicleProfile'

const Overview = ({
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
}: OverviewSection): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5 block">
      <header>
        <h1 className="font-bold text-2xl md:text-4xl text-black">{titleListing}</h1>
        <div className="flex flex-col md:flex-row mt-2 text-black">
          <div className="text-sm md:pr-4 md:mr-4 md:border-r md:border-gray-900 md:border-opacity-25">
            <span>{RvType}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>
              &nbsp;{RVBrand}&nbsp;{RVModel}&nbsp;{RVManufactureDate}
            </span>
            <span>&nbsp;•&nbsp;</span>
            <span>{city}</span>
          </div>
          <div className="text-sm w-full md:w-auto text-black">
            <span>{`Pasajeros: ${spaceForPassengers}`}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{`Huéspedes: ${spaceForSleepers}`}</span>
          </div>
          <div className="pt-2 text-sm w-full md:w-auto text-black">{`Edad mínima del conductor: ${DriverMinimumAge} años`}</div>
        </div>
        <div className="text-base pt-4 lg:pt-5 text-gray-500">{descriptionListing}</div>
      </header>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default Overview
