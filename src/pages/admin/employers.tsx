import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import AdminEmployer from "views/Admin/AdminEmployer"

const EmployerAdminPage: NextPageWithLayout = () => {
  return <AdminEmployer />
}

EmployerAdminPage.Layout = AppLayout
EmployerAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default EmployerAdminPage
