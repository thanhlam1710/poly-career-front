import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"

const ContactAdminPage: NextPageWithLayout = () => {
  return <></>
}

ContactAdminPage.Layout = AppLayout
ContactAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default ContactAdminPage
