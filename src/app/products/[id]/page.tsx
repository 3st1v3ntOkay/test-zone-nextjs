import type { StaticPageParams } from "@/models"
import { notFound } from "next/navigation"
import Content from "../components/Content"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page({ params }: StaticPageParams) {
  const { id } = params

  const validParam = typeof Number(id) === 'number'
  const nani = isNaN(Number(id))
  const mini = validParam === true && nani === false
  
  return (
    <main>
      {mini ? (
        <Content id={id} />
      ) : notFound()}
    </main>
  )
}
