import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import CompanyNew from "views/Employer/Company/New"

const CompanyNewPage: NextPageWithLayout = () => {
  return <CompanyNew />
}

CompanyNewPage.authenticate = {
  permissions: employerOnly,
}

CompanyNewPage.Layout = UserLayout

export default CompanyNewPage
