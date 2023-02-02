import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import DetailRecruitment from "views/Employer/Recruitment/Detail"

const RecruitmentDetailPage: NextPageWithLayout = () => {
  return <DetailRecruitment />
}

RecruitmentDetailPage.authenticate = {
  permissions: employerOnly,
}

RecruitmentDetailPage.Layout = UserLayout

export default RecruitmentDetailPage
