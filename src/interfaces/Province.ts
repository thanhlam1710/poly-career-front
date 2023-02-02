export interface Province {
  id: number | string
  parent: string
  name: string
  code: string
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface ProvinceState {
  listProvince: Province[]
}
