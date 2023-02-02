import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import EmployerDashboard from "views/Employer/Dashboard"

const EmployerDashboardPage: NextPageWithLayout = () => {
  return <EmployerDashboard />
}

EmployerDashboardPage.authenticate = {
  permissions: employerOnly,
}

EmployerDashboardPage.Layout = UserLayout

export default EmployerDashboardPage
