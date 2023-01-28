import Link from "next/link"
import styles from './recipe.module.css'

type RecipeProps = {
  title: string
}

export const Recipe = ({ title }: RecipeProps): JSX.Element => {
  return (<Link href={`/recipe/${title}`} className={styles.container}>
    {title}
  </Link>)
}