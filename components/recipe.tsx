import Link from "next/link"
import styles from './recipe.module.css'
import { timeLog } from "console"

type RecipeProps = {
  title: string,
  link: string
}

export const Recipe = ({ title, link }: RecipeProps): JSX.Element => {
  return (
    <Link href={`/recipe/${link}`} className={styles.container}>
      <div className={styles.title} >{title}</div>
      <img src={`/images/${link}.jpg`} width="200px" className={styles.image}></img>
    </Link>)
}