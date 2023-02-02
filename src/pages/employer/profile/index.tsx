import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import EmployerProfileDetail from "views/Employer/Profile"

const EmployerProfilePage: NextPageWithLayout = () => {
  return <EmployerProfileDetail />
}

EmployerProfilePage.authenticate = {
  permissions: employerOnly,
}

EmployerProfilePage.Layout = UserLayout

export default EmployerProfilePage
