import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import EmployerCompany from "views/Employer/Company"

const EmployerCompanyPage: NextPageWithLayout = () => {
  return <EmployerCompany />
}

EmployerCompanyPage.authenticate = {
  permissions: employerOnly,
}

EmployerCompanyPage.Layout = UserLayout

export default EmployerCompanyPage
