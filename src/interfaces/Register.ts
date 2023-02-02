export interface RegisterStudentPayload {
  full_name: string
  email: string
  password: string
  avatar?: string
  phone?: string
  location_id?: number
  address?: string
  gender?: number
}

export interface RegisterEmployerPayload {
  full_name: string
  email: string
  password: string
  avatar?: string
  phone: string
  address?: string
}
