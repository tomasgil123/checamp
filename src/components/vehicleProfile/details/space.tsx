import Guests from '../icons/guests'
import Passengers from '../icons/passengers'

import { DetailsSpace } from 'src/types/vehicleProfile'

const Space = ({ spaceForPassengers, spaceForSleepers }: DetailsSpace): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5">
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Espacio</h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 md:w-1/4 my-2 mr-2 p-3 md:p-4 rounded border border-gray-200 flex flex-col justify-between h-32">
          <Guests />
          <span className="text-sm md:text-base font-normal text-black mt-auto whitespace-pre-line md:whitespace-normal">
            {`Huéspedes: ${spaceForSleepers}`}
          </span>
        </div>
        <div className=" w-1/2 md:w-1/4 my-2 ml-2 p-3 md:p-4 rounded border border-gray-200 flex flex-col justify-between h-32">
          <Passengers />
          <span className="text-sm md:text-base font-normal text-black mt-auto whitespace-pre-line md:whitespace-normal">
            {`Pasajeros: ${spaceForPassengers}`}
          </span>
        </div>
      </div>
      <div className="border-b border-gray-400 border-solid my-4 md:my-6 w-full"></div>
    </section>
  )
}

export default Space
