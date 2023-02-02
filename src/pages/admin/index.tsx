import React from "react"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppEffect } from "hook/useAppEffect"
import { NextPageWithLayout } from "interfaces/Layout"
import { superAdminOnly } from "utils/auth-helper"

const AdminPage: NextPageWithLayout = () => {
  const router = useRouter()

  useAppEffect(() => {
    router.push(ROUTES.admin.dashboard)
  })

  return <></>
}

AdminPage.authenticate = {
  permissions: superAdminOnly,
}

export default AdminPage
