interface APIFieldError {
  field: string
  message: string
}

export interface Meta {
  page?: number
  total?: number
  limit?: number
}

export interface APIResponse<T> {
  code: string
  status: string
  message?: string
  fieldErrors?: APIFieldError[]
  data: T
  meta?: Meta
}
