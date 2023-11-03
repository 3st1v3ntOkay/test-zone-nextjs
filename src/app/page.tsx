import style from './page.module.css'

import { inter } from './fonts'
import { timer, dateFormat } from "@/utils"
import Google from '../components/google'

export default function Home() {
  return (
    <main>
      <p className={style.development}>Timer Utils: {timer}</p>

      <h1 className={style.title}>Timer.js</h1>
      <time className={style.datePublish}>{dateFormat}</time>
      <p className={style.author}>develop by esteban</p>

      <Google />
    </main>
  )
}
