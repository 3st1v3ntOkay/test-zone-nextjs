import { wait } from "@/utils"

export const LoadingComponent = async () => {
  await wait(3000)

  return (
    <section>
      <h2>I was Suspense</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit itaque labore adipisci consectetur hic, quasi obcaecati ratione magni nesciunt quae cum maxime veritatis exercitationem. Exercitationem possimus eos ullam numquam.</p>
    </section>
  )
}
