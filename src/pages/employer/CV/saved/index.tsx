import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import SavedCV from "views/Employer/CV/SavedCV"

const EmployerProfilePage: NextPageWithLayout = () => {
  return <SavedCV />
}

EmployerProfilePage.authenticate = {
  permissions: employerOnly,
}

EmployerProfilePage.Layout = UserLayout

export default EmployerProfilePage
