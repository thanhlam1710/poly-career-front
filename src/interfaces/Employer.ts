import { CompanyPayload } from "./Company"

export interface Employer {
  id: number
  full_name: string
  email: string
  password: string
  address: string
  phone: string
  avatar: string
  is_noti: boolean
  role: string
  is_active: boolean
  is_owner: boolean
  company_id: number | null
  created_at: string
  updated_at: string
  company?: CompanyPayload
}

export interface EmployerPayload {
  full_name: string
  phone: string
  avatar?: string
  address?: string
  email_noti?: string
}

export interface NewPasswordPayload {
  current_password: string
  new_password: string
  repeat_password?: string
}

export interface EmployerState {
  isLoading: boolean
  employerProfile?: Employer
}
