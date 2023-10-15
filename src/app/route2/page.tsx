'use client'

import styles from '../page.module.css'
import React from 'react'

import { SearchBox } from 'app/components'

import Link from 'next/link'

const Route2 = () => {
  return (
    <main className={styles.main}>
      <h1>Hello, Route 2!</h1>

      <SearchBox />

      <div className={styles.grid}>
      <Link
          href="./"
          className={styles.card}
        >
          <h2>
            Homepage <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </Link>
        
        <Link
          href="./route1"
          className={styles.card}
        >
          <h2>
            Route 1 <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>
      </div>
    </main>
  )
}

export default Route2