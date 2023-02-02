import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import CV from "views/Employer/CV"

const EmployerProfilePage: NextPageWithLayout = () => {
  return <CV />
}

EmployerProfilePage.authenticate = {
  permissions: employerOnly,
}

EmployerProfilePage.Layout = UserLayout

export default EmployerProfilePage
