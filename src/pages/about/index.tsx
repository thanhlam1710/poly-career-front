import * as React from "react"
import { Button } from "antd"
import { NextPageWithLayout } from "interfaces/Layout"
import AppLayout from "layout/UserLayout"

const About: NextPageWithLayout = () => {
  return (
    <>
      <Button type="primary">login</Button>
      <Button>login</Button>
    </>
  )
}

About.Layout = AppLayout

export default About
