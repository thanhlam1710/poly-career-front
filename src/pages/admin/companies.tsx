import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import ListCompanyContainer from "views/Admin/AdminCompany/ListCompany"

const CompanyAdminPage: NextPageWithLayout = () => {
  return <ListCompanyContainer />
}

CompanyAdminPage.Layout = AppLayout
CompanyAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default CompanyAdminPage
