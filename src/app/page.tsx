import style from './page.module.css'
import { timer, dateFormat } from "@/utils"
import Link from 'next/link'
import { wait } from '@/utils'
import { Suspense } from 'react'
import {Loading, LoadingComponent} from '@/components'

export default async function Home() {
  await wait(1000)

  return (
    <main>
      <p className={style.development}>Timer Utils: {timer}</p>

      <h1 className={style.title}>Timer.js</h1>
      <time className={style.datePublish}>{dateFormat}</time>
      <p className={style.author}>develop by esteban</p>

      <Suspense fallback={<Loading/>}>
        <LoadingComponent />
      </Suspense>

      <Link href='/dashboard'>Go to dashboard page</Link>
    </main>
  )
}
