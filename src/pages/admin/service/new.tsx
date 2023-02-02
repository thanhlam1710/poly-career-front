import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"

const ServiceNewAdminPage: NextPageWithLayout = () => {
  return <></>
}

ServiceNewAdminPage.Layout = AppLayout
ServiceNewAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default ServiceNewAdminPage
