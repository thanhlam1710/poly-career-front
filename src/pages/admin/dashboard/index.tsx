import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import DashboardContainer from "views/Admin"

const AdminDashboardPage: NextPageWithLayout = () => {
  return <DashboardContainer />
}

AdminDashboardPage.Layout = AppLayout
AdminDashboardPage.authenticate = {
  permissions: superAdminOnly,
}

export default AdminDashboardPage
