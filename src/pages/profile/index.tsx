import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import { studentOnly } from "utils/auth-helper"
import StudentProfile from "views/Profile"

const StudentProfilePage: NextPageWithLayout = () => {
  return <StudentProfile />
}

StudentProfilePage.authenticate = {
  permissions: studentOnly,
}
StudentProfilePage.Layout = ClientLayout

export default StudentProfilePage
