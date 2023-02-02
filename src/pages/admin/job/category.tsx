import React from "react"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"
import { superAdminOnly } from "utils/auth-helper"
import ListCategoryContainer from "views/Admin/Job/ListCategory"

const CategoryAdminPage: NextPageWithLayout = () => {
  return <ListCategoryContainer />
}

CategoryAdminPage.Layout = AppLayout
CategoryAdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default CategoryAdminPage
