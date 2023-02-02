import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import ListJobSaved from "views/Job/Saved"

const ListJobsSavedPage: NextPageWithLayout = () => {
  return <ListJobSaved />
}

ListJobsSavedPage.Layout = ClientLayout

export default ListJobsSavedPage
