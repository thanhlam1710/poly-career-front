import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import ListJobsContainer from "views/Admin/Job/ListJobs"

const JobsAdminPage: NextPageWithLayout = () => {
  return <ListJobsContainer />
}

JobsAdminPage.Layout = AppLayout
JobsAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default JobsAdminPage
