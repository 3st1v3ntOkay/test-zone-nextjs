'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import styles from './searchBox.module.css'

const SearchBox = () => {
  const router = useRouter()
  const [valueSearch, setValueSearch] = useState('')

  const handleChange = (e: any) => {
    setValueSearch(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push(`/route2/${valueSearch}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type='search' value={valueSearch} onChange={handleChange} className={styles['input-search']} />
      <button type='submit' className={styles.button}>Go</button>
    </form>
  )
}

export default SearchBox