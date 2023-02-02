import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import { studentOnly } from "utils/auth-helper"
import CVCreate from "views/CV"

const EditCVPage: NextPageWithLayout = () => {
  return <CVCreate />
}

EditCVPage.Layout = ClientLayout

EditCVPage.authenticate = {
  permissions: studentOnly,
}

export default EditCVPage
