import React from "react"
import { NextPage } from "next"
import { AppProps } from "next/app"

interface Authentication {
  permissions: string[]
}

export interface LayoutProps {
  children?: React.ReactElement | React.ReactElement[]
}
export interface LayoutAdminProps {
  children?: React.ReactElement | React.ReactElement[]
  navType?: string
  location?: any
}
export interface PrivateRouterProps extends LayoutProps {
  authenticate?: Authentication
}

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  Layout?: React.FC
  authenticate?: Authentication
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
