import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"

const ServiceListAdminPage: NextPageWithLayout = () => {
  return <></>
}

ServiceListAdminPage.Layout = AppLayout
ServiceListAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default ServiceListAdminPage
