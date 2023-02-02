import { useRouter } from "next/router"

const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <div>Detail: {id}</div>
    </>
  )
}
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Detail
