import React from "react"

export interface Loading {
  align: string
  cover: string
  size: string
}

export interface IFlex {
  children: React.ReactNode
  className: string
  alignItems: string
  flexDirection: string
  justifyContent: string
  mobileFlex: boolean
}

export interface INavTree {
  hash?: string
  key?: string
  search?: string
  state?: string
}

export interface IGetRouteInfo<T> {
  navTree?: T
  path?: string
}
