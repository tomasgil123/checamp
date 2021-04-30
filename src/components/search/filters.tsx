import { useState } from 'react'
import cx from 'classnames'

// * Components *
import Box from 'src/components/vehicleProfile/details/components/box'

// * Utils *
import useRequest from 'src/hooks/useRequest'

// * Requests *
import { getAllCities } from 'src/services'

interface FilterProps {
  applyFilters: (typeRvFilter: string, cityFilter: string) => void
}

const Filters = ({ applyFilters }: FilterProps): JSX.Element => {
  const [typeRvFilter, setTypeRvFilter] = useState([''])
  const [cityFilter, setCityFilter] = useState<string>('')

  const { loading, error, result } = useRequest<string[]>(() => getAllCities())

  const boxStyles = (active: boolean, isLeft: boolean): string => {
    return cx(
      'w-full',
      { 'bg-gray-200 rounded border': active },
      { 'ml-2': !isLeft },
      { 'mr-2': isLeft }
    )
  }

  const onClickCity = (city): void => {
    setCityFilter(city)
  }

  return (
    <div className="p-4 flex flex-col justify-start w-full">
      <div className="font-bold text-lg md:text-xl pb-4 text-black"> Filtros</div>
      <div className="text-lg font-medium py-4 text-black">Tipo de RV</div>
      <div className="flex flex-row pb-4">
        <div
          onClick={(): void => setTypeRvFilter(['Remolque'])}
          className={boxStyles(typeRvFilter.includes('Remolque'), true)}
        >
          <Box text="Remolque" icon={<img className="w-20 h-20" src={'/wohnwagen.svg'} />} />
        </div>
        <div
          onClick={(): void => setTypeRvFilter(['Integrado', 'Tipo A', 'Tipo B', 'Tipo C'])}
          className={boxStyles(typeRvFilter.includes('Integrado'), false)}
        >
          <Box text="Integrado" icon={<img className="w-20 h-20" src={'/integriert.svg'} />} />
        </div>
      </div>
      <span className="font-normal text-sm text-black">
        * para los rvs de tipo remolque vas a necesitar tu propio vehículo para transladarlo
      </span>
      <div className="text-lg font-medium py-4 text-black">Lugar de pickup</div>
      <span className="font-normal text-sm text-black">
        Es el lugar por donde vas a tener que pasar a buscar el vehículo una vez que lo alquilas
      </span>
      <div className="pt-4">
        {loading ? (
          <span>Cargando ciudades...</span>
        ) : (
          <>
            {error ? (
              <span>Ha ocurrido un error</span>
            ) : (
              <div>
                <select onChange={(e): void => onClickCity(e.target.value)}>
                  <option>Elegi una ciudad</option>
                  {result.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex flex-row justify-center w-full h-full items-center pt-8">
        <button
          className="p-2 md:p-4 bg-primary-green rounded w-60"
          onClick={(): void => applyFilters(typeRvFilter, cityFilter)}
        >
          <span className="text-white font-bold text-sm md:text-base">Aplicar filtros</span>
        </button>
      </div>
    </div>
  )
}

export default Filters
