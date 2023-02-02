import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import CompanyEdit from "views/Employer/Company/Edit"

const CompanyEditPage: NextPageWithLayout = () => {
  return <CompanyEdit />
}

CompanyEditPage.authenticate = {
  permissions: employerOnly,
}

CompanyEditPage.Layout = UserLayout

export default CompanyEditPage
