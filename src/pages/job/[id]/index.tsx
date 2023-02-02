import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import DetailJob from "views/Job/DetailJob"

const DetailJobPage: NextPageWithLayout = () => {
  return <DetailJob />
}

DetailJobPage.Layout = ClientLayout

export default DetailJobPage
