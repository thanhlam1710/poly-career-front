import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"

const ServiceReceiptAdminPage: NextPageWithLayout = () => {
  return <></>
}

ServiceReceiptAdminPage.Layout = AppLayout
ServiceReceiptAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default ServiceReceiptAdminPage
