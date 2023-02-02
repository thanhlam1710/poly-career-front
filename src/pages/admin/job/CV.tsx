import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"

const CVAdminPage: NextPageWithLayout = () => {
  return <></>
}

CVAdminPage.Layout = AppLayout
CVAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default CVAdminPage
