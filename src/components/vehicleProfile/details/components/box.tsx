import cx from 'classnames'

interface BoxProps {
  icon: JSX.Element
  text: string
  active?: boolean
}

const Box = ({ icon, text, active = true }: BoxProps): JSX.Element => {
  const textStyles = cx(
    'text-sm md:text-base font-normal  mt-auto whitespace-pre-line md:whitespace-normal',
    { 'text-black': active, 'text-gray-500': !active }
  )

  return (
    <div className="w-full p-3 md:p-4 rounded border border-gray-200 flex flex-col justify-between h-32">
      {icon}
      <span className={textStyles}>{text}</span>
    </div>
  )
}

export default Box
