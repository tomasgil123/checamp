import { useRouter } from 'next/router'

const Price = ({
  pricePerDay,
  priceExtra,
  id,
}: {
  pricePerDay: string
  priceExtra: string
  id: number
}): JSX.Element => {
  const router = useRouter()

  const onCheckPrice = (): void => {
    router.push({
      pathname: '/inquilinos/contacto',
      query: { rvId: id },
    })
  }
  return (
    <section>
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Precio</h1>
      <div className="text-base md:text-lg text-black font-medium pb-4">
        <span>
          Precio por día:{' '}
          <>
            {pricePerDay ? (
              <span className="font-normal">{pricePerDay}</span>
            ) : (
              <span className="text-blue-500 underline cursor-pointer" onClick={onCheckPrice}>
                Consultar precio
              </span>
            )}
          </>
        </span>
      </div>
      {priceExtra && (
        <>
          <div className="text-base md:text-lg text-black font-medium pb-4">
            <span>Costos extra a tener en cuenta</span>
          </div>
          <div className="text-base text-black font-normal ">
            <span>{priceExtra}</span>
          </div>
        </>
      )}
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default Price
