import Link from 'next/link'
import React from 'react'
import { wait } from '@/utils'

//? Ver si agrego un type/interface -> : (params?: string) => React.JSX.Element
const Dashboard = async () => {
  await wait()

  return (
    <section>
      <h2>Dashboard route</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus voluptatibus dolorum porro ullam blanditiis ab adipisci fugit quia minus, suscipit fugiat magnam facere impedit incidunt molestias, odio quas non.</p>
      
      <Link href='/'>Go to Home page</Link>
    </section>
  )
}

export default Dashboard