import Link from 'next/link'
import styles from '../../page.module.css'

import {waiting} from 'app/utils'

export default async function Page({ params }: { params: { slug: string } }) {
  await waiting()

  return(
    <main className={styles.main}>
      <h1>Welcome to {params.slug} blog</h1>
      <p>made by <b>esteban_jv.</b></p>
      <Link href='./'>Back</Link>
    </main>
  )
}