import { SubmitFormProps } from "./Form"
import { Province } from "./Province"

export interface CompanyPayload {
  id?: number
  name: string
  tax_code: string
  website: string
  size: number
  company_activity_id: string
  company_activity?: { id: number; name: string }
  phone: string
  address: string
  province_id: number
  province?: Province
  banner?: string
  avatar?: string
  information: string
  is_active?: boolean
  is_hidden?: boolean
  is_noti?: boolean
  status?: number
}

export interface Company {
  id: number
  name: string
  province_id: 1
  province: {
    id: number
    name: string
  }
  address: string
  avatar: string
  banner: string
  tax_code: string
  website: string
  phone: string
  information: string
  company_activity_id: number
  company_activity: {
    id: number
    name: string
  }
  size: number
  status: number
  is_hidden: boolean
  is_active: boolean
  is_noti: boolean
}

export type CompanyFormProps = SubmitFormProps<CompanyPayload>

export interface CompanyActivities {
  id: number
  name: string
}

export interface PersonnelSize {
  id: number
  label: string
}

export interface CompanyState {
  isLoading: boolean
  companyActivities?: CompanyActivities[]
}

export interface AvatarPayload {
  avatar: string
}

export interface BannerPayload {
  banner: string
}
