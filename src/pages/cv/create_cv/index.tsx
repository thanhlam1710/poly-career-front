import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import { studentOnly } from "utils/auth-helper"
import CVCreate from "views/CV"

const CVPage: NextPageWithLayout = () => {
  return <CVCreate />
}

CVPage.Layout = ClientLayout

CVPage.authenticate = {
  permissions: studentOnly,
}

export default CVPage
