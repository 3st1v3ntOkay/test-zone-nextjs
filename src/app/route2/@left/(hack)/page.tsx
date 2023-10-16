import { waiting } from "app/utils"

const Left = async () => {
  await waiting()

  return (
    <>
      <h1>This is left</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate eos eum deserunt fugiat repellat, perspiciatis cum magni reiciendis nostrum dolore non ab ad laudantium culpa laborum quos corporis eveniet?</p>
    </>
  )
}

export default Left