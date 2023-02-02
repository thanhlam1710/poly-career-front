import React from "react"

export interface NavTree {
  key: string
  path?: string
  title: string
  icon?: React.ComponentType
  submenu?: NavTree[]
  divider?: boolean
  hidden?: () => boolean
  disable?: () => boolean
}
