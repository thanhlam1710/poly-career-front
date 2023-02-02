import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import AdminDetailJob from "views/Admin/Job/detailJob"

const JobDetailPage: NextPageWithLayout = () => {
  return <AdminDetailJob />
}

JobDetailPage.Layout = AppLayout
JobDetailPage.authenticate = {
  permissions: superAdminOnly,
}

export default JobDetailPage
