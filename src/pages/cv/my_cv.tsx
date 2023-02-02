import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import { studentOnly } from "utils/auth-helper"
import CVCreate from "views/CV/MyCV"

const MyCVPage: NextPageWithLayout = () => {
  return <CVCreate />
}

MyCVPage.Layout = ClientLayout

MyCVPage.authenticate = {
  permissions: studentOnly,
}

export default MyCVPage
