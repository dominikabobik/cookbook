import { FC } from "react"
import styles from './checkbox.module.css'

type CheckboxProps = {
  label: string,
  value: boolean,
  onChange: () => void
}


export const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <label className={styles.label}>
      <input type='checkbox' checked={value} onChange={onChange} ></input>
      {label}
    </label>
  )
}