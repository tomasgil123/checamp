import s from './radioButton.module.scss'

const RadioButton = ({
  name,
  groupName,
  onChange,
  checked,
}: {
  name: string
  groupName: string
  onChange: () => void
  checked: boolean
}): JSX.Element => {
  return (
    <label className={s.container}>
      <div>{name}</div>
      <input checked={checked} onChange={(): void => onChange()} type="radio" name={groupName} />
      <span className={s.checkmark}></span>
    </label>
  )
}

export default RadioButton
