import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Home page!</h1>

      <div className={styles.grid}>
        <a
          href="./route1"
          className={styles.card}
        >
          <h2>
            Route 1 <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="./route2"
          className={styles.card}
        >
          <h2>
            Route 2 <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
      </div>
    </main>
  )
}
