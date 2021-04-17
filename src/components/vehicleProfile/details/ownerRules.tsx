import Box from './components/box'

import PetsAllowed from 'src/components/icons/pets-allowed.svg'
import PetsNotAllowed from 'src/components/icons/pets-not-allowed.svg'
import PartiesAllowed from 'src/components/icons/events-allowed.svg'
import PartiesNotAllowed from 'src/components/icons/events-not-allowed.svg'
import SmokingAllowed from 'src/components/icons/smoking-allowed.svg'
import SmokingNotAllowed from 'src/components/icons/smoking-not-allowed.svg'

// * Types *
import { OwnerRules as OwnerRulesTypes } from 'src/types/vehicleProfile'

const OwnerRules = ({ pets, tailgating, festivals, smoking }: OwnerRulesTypes): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5">
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Reglas del vehículo</h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 md:w-1/4">
          <div className="m-2">
            <Box
              icon={<img className="w-10 h-10" src={pets ? PetsAllowed : PetsNotAllowed} />}
              text={pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 md:ml-2">
          <div className="m-2">
            <Box
              icon={
                <img
                  className="w-10 h-10"
                  src={tailgating && festivals ? PartiesAllowed : PartiesNotAllowed}
                />
              }
              text={
                tailgating && festivals
                  ? 'Se permite ir a eventos/recitales'
                  : 'No se permite ir a eventos/recitales'
              }
            />
          </div>
        </div>
        <div className="w-1/2 md:w-1/4">
          <div className="m-2">
            <Box
              icon={
                <img className="w-10 h-10" src={smoking ? SmokingAllowed : SmokingNotAllowed} />
              }
              text={smoking ? 'Se permite fumar' : 'No se permite fumar'}
            />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default OwnerRules
