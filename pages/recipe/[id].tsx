import { GetStaticPropsContext, NextPage } from "next"
import { FC } from "react"
import styles from '/styles/recipepage.module.css'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'
import { RecipeList } from "@/data/data"
import { Logo } from "@/components/logo"

type RecipePageProps = {
  title: string,
  file: string
}

const RecipePage: FC<RecipePageProps> = (props: RecipePageProps) => {
  return (
    <div className={styles.container}>
      <Logo />
      <ReactMarkdown>{props.file}</ReactMarkdown>
      <img src={`/images/${props.title}.jpg`} className={styles.image}></img>
    </div>)
}
export default RecipePage

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = RecipeList.map((e) => ({
    params: { id: e.link },
  }))

  return { paths, fallback: true }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const fullPath = path.join(process.cwd(), 'public', 'markdown', `${context.params?.id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8")

  return {
    props: {
      title: context.params?.id,
      file: fileContent
    }
  }
}


