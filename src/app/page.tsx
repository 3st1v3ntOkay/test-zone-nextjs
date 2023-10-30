'use client'

import style from './page.module.css'

import { inter } from './fonts'
import { location } from "@/utils"

export default function Home() {
  return (
    <>
      <h1 className={`${style.h1} ${inter.variable}`}>this is a h1</h1>
      <p className={style.important}>Location Utils: {location}</p>
    </>
  )
}
