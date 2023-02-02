import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import Employer from "views/Employer"

const EmployerPage: NextPageWithLayout = () => {
  return <Employer />
}

EmployerPage.authenticate = {
  permissions: employerOnly,
}

EmployerPage.Layout = UserLayout

export default EmployerPage
