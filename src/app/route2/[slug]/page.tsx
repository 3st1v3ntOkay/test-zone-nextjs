import Link from 'next/link'
import styles from '../../page.module.css'

export default function Page({ params }: { params: { slug: string } }) {
  return(
    <main className={styles.main}>
      <h1>Welcome to {params.slug} blog</h1>
      <p>made by <b>esteban_jv.</b></p>
      <Link href='./'>Back</Link>
    </main>
  )
}