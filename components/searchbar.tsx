import { ChangeEvent, FC } from "react"
import styles from './searchbar.module.css'
import { globalContextType, useGlobalContext } from "@/pages"

export const SearchBar = () => {
  const cntx: globalContextType = useGlobalContext()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    cntx.setSearch(e.target.value)
  }

  return (
    <div>
      <input placeholder="Search" className={styles.inputBox} onChange={handleSearch}></input>
    </div>
  )
}