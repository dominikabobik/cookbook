import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Filter } from '@/components/filter'
import { SearchBar } from '@/components/searchbar'
import { Recipe } from '@/components/recipe'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { RecipeList } from '@/data/data'
import { Logo } from '@/components/logo'

export type globalContextType = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  deser: boolean,
  setDeser: Dispatch<SetStateAction<boolean>>,
  mieso: boolean,
  setMieso: Dispatch<SetStateAction<boolean>>,
  ryba: boolean,
  setRyba: Dispatch<SetStateAction<boolean>>,
  sniadanie: boolean,
  setSniadanie: Dispatch<SetStateAction<boolean>>,
  kolacja: boolean,
  setKolacja: Dispatch<SetStateAction<boolean>>,
  obiad: boolean,
  setObiad: Dispatch<SetStateAction<boolean>>,
  wielkanoc: boolean,
  setWielkanoc: Dispatch<SetStateAction<boolean>>,
  swieta: boolean,
  setSwieta: Dispatch<SetStateAction<boolean>>
}
export const globalContext = createContext<globalContextType>({} as globalContextType);
export const useGlobalContext = () => useContext(globalContext)

export default function Home() {
  const [deser, setDeser] = useState(false)
  const [mieso, setMieso] = useState(false)
  const [ryba, setRyba] = useState(false)
  const [sniadanie, setSniadanie] = useState(false)
  const [kolacja, setKolacja] = useState(false)
  const [obiad, setObiad] = useState(false)
  const [wielkanoc, setWielkanoc] = useState(false)
  const [swieta, setSwieta] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <globalContext.Provider value={{
      deser, setDeser,
      mieso, setMieso,
      ryba, setRyba,
      sniadanie, setSniadanie,
      kolacja, setKolacja,
      obiad, setObiad,
      wielkanoc, setWielkanoc,
      swieta, setSwieta,
      search, setSearch
    }}>
      <Head>
        <title>Ksiązka Kucharska</title>
        <meta name="description" content="My cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftBar}>
          <Logo />
          <SearchBar />
          <Filter />
        </div>
        <ul className={styles.recipesContainer}>
          {RecipeList.sort((a, b) => { return a.title.localeCompare(b.title) }).map((e, i) => {
            if (!search) {
              if (!deser && !mieso && !ryba && !sniadanie && !kolacja && !obiad && !wielkanoc && !swieta)
                return (
                  <Recipe title={e.title} link={e.link} key={i}></Recipe>
                )
              else if (deser && e.filters.includes('deser') ||
                mieso && e.filters.includes('mieso') ||
                ryba && e.filters.includes('ryba') ||
                sniadanie && e.filters.includes('sniadanie') ||
                kolacja && e.filters.includes('kolacja') ||
                obiad && e.filters.includes('obiad') ||
                wielkanoc && e.filters.includes('wielkanoc') ||
                swieta && e.filters.includes('swieta')) {
                return (
                  <Recipe title={e.title} link={e.link} key={i}></Recipe>
                )
              }
            } else if (e.title.toLowerCase().includes(search.toLowerCase())) {
              if (!deser && !mieso && !ryba && !sniadanie && !kolacja && !obiad && !wielkanoc && !swieta)
                return (
                  <Recipe title={e.title} link={e.link} key={i}></Recipe>
                )
              else if (deser && e.filters.includes('deser') ||
                mieso && e.filters.includes('mieso') ||
                ryba && e.filters.includes('ryba') ||
                sniadanie && e.filters.includes('sniadanie') ||
                kolacja && e.filters.includes('kolacja') ||
                obiad && e.filters.includes('obiad') ||
                wielkanoc && e.filters.includes('wielkanoc') ||
                swieta && e.filters.includes('swieta')) {
                return (
                  <Recipe title={e.title} link={e.link} key={i}></Recipe>
                )
              }
            }
          })}
        </ul>
      </main>
    </globalContext.Provider>
  )
}
