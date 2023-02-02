import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import CompanyActivitiesContainer from "views/Admin/AdminCompany/CompanyActivities"

const CompanyActivityAdminPage: NextPageWithLayout = () => {
  return <CompanyActivitiesContainer />
}

CompanyActivityAdminPage.Layout = AppLayout
CompanyActivityAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default CompanyActivityAdminPage
