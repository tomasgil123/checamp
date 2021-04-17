const Price = ({
  pricePerDay,
  priceExtra,
}: {
  pricePerDay: string
  priceExtra: string
}): JSX.Element => {
  return (
    <section className="w-full lg:col-start-1 lg:col-end-5">
      <h1 className="font-bold text-lg md:text-xl pb-4 text-black">Precio</h1>
      <div className="text-base md:text-lg text-black font-medium pb-4">
        <span>Precio por dia: {pricePerDay}</span>
      </div>
      <div className="text-base md:text-lg text-black font-medium pb-4">
        <span>Costos extra a tener en cuenta</span>
      </div>
      <div className="text-base text-black font-normal ">
        <span>{priceExtra}</span>
      </div>
      <div className="border-b border-gray-400 border-solid my-6 md:my-10 w-full"></div>
    </section>
  )
}

export default Price
