import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import CreateRecruitment from "views/Employer/Recruitment/New"

const RecruitmentNewPage: NextPageWithLayout = () => {
  return <CreateRecruitment />
}

RecruitmentNewPage.authenticate = {
  permissions: employerOnly,
}

RecruitmentNewPage.Layout = UserLayout

export default RecruitmentNewPage
