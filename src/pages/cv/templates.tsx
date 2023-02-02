import React from "react"
import Head from "next/head"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import { studentOnly } from "utils/auth-helper"
import TemplateCV from "views/templateCV"

const TemplatePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Công cụ viết CV</title>
      </Head>
      <TemplateCV />
    </>
  )
}

TemplatePage.Layout = ClientLayout

TemplatePage.authenticate = {
  permissions: studentOnly,
}

export default TemplatePage
