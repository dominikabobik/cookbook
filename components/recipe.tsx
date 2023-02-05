import Link from "next/link"
import styles from './recipe.module.css'

type RecipeProps = {
  title: string,
  link: string
}

export const Recipe = ({ title, link }: RecipeProps): JSX.Element => {
  return (<Link href={`/recipe/${link}`} className={styles.container}>
    {title}
  </Link>)
}