import React from 'react'
import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.div}>
      <h3>This page is loading...</h3>
      <p>Be pacient this could take some seconds.</p>
    </div>
  )
}

export default Loading