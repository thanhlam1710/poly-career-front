import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import ListStudentContainer from "views/Admin/AdminStudent"

const StudentAdminPage: NextPageWithLayout = () => {
  return <ListStudentContainer />
}

StudentAdminPage.Layout = AppLayout
StudentAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default StudentAdminPage
