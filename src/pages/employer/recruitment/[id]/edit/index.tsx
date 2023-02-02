import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import EditRecruitment from "views/Employer/Recruitment/Edit"

const RecruitmentEditPage: NextPageWithLayout = () => {
  return <EditRecruitment />
}

RecruitmentEditPage.authenticate = {
  permissions: employerOnly,
}

RecruitmentEditPage.Layout = UserLayout

export default RecruitmentEditPage
