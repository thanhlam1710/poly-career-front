import { Category } from "./Category"
import { Province } from "./Province"

export interface Profile {
  position_wish?: string
  level_wish?: string
  level_current?: string
  experience?: string
  salary_wish?: number
  province_id?: number
  job_type_wish?: string
  category_wish?: number
  province?: Province
  category?: Category
}

export interface Student {
  id: number
  email: string
  full_name: string
  password: string
  avatar: string
  location_id: number | string
  location?: Province
  birthday?: string | Date
  phone?: string
  address: string
  gender: number
  is_noti: boolean
  is_active: boolean
  profile?: Profile
  status: number
  role: string
  created_at: string
  updated_at: string
}

export interface Name {
  new_name: string
}

export interface NamePayload {
  full_name: string
}

export interface EmailPayload {
  new_email: string
}

export interface Password {
  new_password: string
}

export interface StudentState {
  isLoading: boolean
  studentProfile?: Student
}
