import style from './page.module.css'
import Google from '@/components/google'
import { timer, dateFormat } from "@/utils"
import Link from 'next/link'
import { wait } from '@/utils'

export default async function Home() {
  await wait()

  return (
    <main>
      <p className={style.development}>Timer Utils: {timer}</p>

      <h1 className={style.title}>Timer.js</h1>
      <time className={style.datePublish}>{dateFormat}</time>
      <p className={style.author}>develop by esteban</p>

      <Google />

      <Link href='/dashboard'>Go to dashboard page</Link>
    </main>
  )
}
