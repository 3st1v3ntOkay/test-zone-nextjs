import style from './page.module.css'

import { inter } from './fonts'
import { timer, dateFormat } from "@/utils"

export default function Home() {
  return (
    <>
      <h1 className={`${style.h1} ${inter.variable}`}>this is a h1</h1>
      <p className={style.important}>Timer Utils: {timer}</p>
      <time>{dateFormat}</time>
    </>
  )
}
