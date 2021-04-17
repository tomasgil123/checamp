import Guests from '../icons/guests'
import Passengers from '../icons/passengers'
import Box from './components/box'
import { DetailsSpace } from 'src/types/vehicleProfile'

const Space = ({ spaceForPassengers, spaceForSleepers }: DetailsSpace): JSX.Element => {
  return (
    <section>
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Espacio</h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 md:w-1/4">
          <div className="m-2">
            <Box icon={<Guests />} text={`Huéspedes: ${spaceForSleepers}`} />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4">
          <div className="m-2">
            <Box icon={<Passengers />} text={`Pasajeros: ${spaceForPassengers}`} />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default Space
