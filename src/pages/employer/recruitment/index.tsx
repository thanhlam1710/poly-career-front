import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import RecruitmentList from "views/Employer/Recruitment"

const RecruitmentListPage: NextPageWithLayout = () => {
  return <RecruitmentList />
}

RecruitmentListPage.authenticate = {
  permissions: employerOnly,
}

RecruitmentListPage.Layout = UserLayout

export default RecruitmentListPage
