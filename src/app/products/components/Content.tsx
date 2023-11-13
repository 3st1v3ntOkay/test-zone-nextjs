import Link from 'next/link'
import React from 'react'

interface ObjectValue {
  id: string
}

const Content = ({ id }: ObjectValue) => {
  return (
    <>
      <h1>ID page: #{id}</h1>
      <p>Author: ipsum dolor</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint cupiditate enim similique. Voluptate voluptatum laborum eos, ab saepe amet eum sunt quae earum magnam, expedita architecto quaerat iure ex?</p>

      <Link href="/">Home page</Link>
    </>
  )
}

export default Content