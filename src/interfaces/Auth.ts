export interface AuthState {
  isLoading: boolean
  isLoggedIn: boolean
  token: string
  type?: "student" | "employer"
}

export interface LoginPayload {
  email: string
  password: string
}

export interface Login {
  token: string
}
