import { useCallback, useState } from "react"
import { Checkbox } from "./checkbox"
import styles from './filter.module.css'
import { globalContextType, useGlobalContext } from "@/pages"


export const Filter = (): JSX.Element => {

  const cntx: globalContextType = useGlobalContext()

  const handleDeser = () => {
    cntx.setDeser(!cntx.deser)
  }

  const handleMieso = () => {
    cntx.setMieso(!cntx.mieso)
  }

  const handleRyba = () => {
    cntx.setRyba(!cntx.ryba)
  }

  const handleSniadanie = () => {
    cntx.setSniadanie(!cntx.sniadanie)
  }

  const handleKolacja = () => {
    cntx.setKolacja(!cntx.kolacja)
  }

  const handleObiad = () => {
    cntx.setObiad(!cntx.obiad)
  }

  const handleWielkanoc = () => {
    cntx.setWielkanoc(!cntx.wielkanoc)
  }

  const handleSwieta = () => {
    cntx.setSwieta(!cntx.swieta)
  }

  const handleButton = () => {
    cntx.setDeser(false)
    cntx.setMieso(false)
    cntx.setRyba(false)
    cntx.setSniadanie(false)
    cntx.setKolacja(false)
    cntx.setObiad(false)
    cntx.setWielkanoc(false)
    cntx.setSwieta(false)
  }

  // const [checked, setChecked] = useState<Record<string, boolean>>({});

  // const click = useCallback((key: string) => {
  //   setChecked(old => ({
  //     ...old,
  //     [key]: !(old[key] ?? false)
  //   }))
  // }, []);

  return (
    <div className={styles.container}>
      <Checkbox label="Danie mięsne" value={cntx.mieso} onChange={handleMieso} />
      <Checkbox label="Danie rybne" value={cntx.ryba} onChange={handleRyba} />
      <Checkbox label="Śniadanie" value={cntx.sniadanie} onChange={handleSniadanie} />
      <Checkbox label="Obiad" value={cntx.obiad} onChange={handleObiad} />
      <Checkbox label="Kolacja" value={cntx.kolacja} onChange={handleKolacja} />
      <Checkbox label="Deser" value={cntx.deser} onChange={handleDeser} />
      <Checkbox label="Wielkanoc" value={cntx.wielkanoc} onChange={handleWielkanoc} />
      <Checkbox label="Święta" value={cntx.swieta} onChange={handleSwieta} />
      <button className={styles.button} onClick={handleButton}>Clear All the Filters</button>
    </div>)
}