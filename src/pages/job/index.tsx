import React from "react"
import Head from "next/head"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import Job from "views/Job"

const JobPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Cơ hội việc làm</title>
      </Head>
      <Job />
    </>
  )
}

// JobPage.authenticate = {
//   permissions: studentOnly,
// }

JobPage.Layout = ClientLayout

export default JobPage
