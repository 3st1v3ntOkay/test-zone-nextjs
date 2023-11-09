'use client'

import style from './page.module.css'
import { timer, dateFormat } from "@/utils"
import Link from 'next/link'
import { wait } from '@/utils'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  // await wait()
  
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleClick = () => {
    return router.push(`/products/${search}`)
  }

  return (
    <main>
      <p className={style.development}>Timer Utils: {timer}</p>

      {/* <h1 className={style.title}>Timer.js</h1>
      <time className={style.datePublish}>{dateFormat}</time>
      <p className={style.author}>develop by esteban</p> */}

      {/* <Google /> */}

      <Link href='/dashboard'>Go to dashboard page</Link>

        <input type="search" value={search} onChange={handleChange} />
        <button type='button' onClick={handleClick}>Buscar</button>
    </main>
  )
}
