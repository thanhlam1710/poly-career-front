import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { Employer, NewPasswordPayload } from "interfaces/Employer"

export const employerService = {
  getProfile(): Promise<APIResponse<Employer>> {
    return appAxiosDefault.get(API_ROUTES.employerProfile)
  },
  updateProfile<T>(payload: T): Promise<APIResponse<unknown>> {
    return appAxiosDefault.put(API_ROUTES.employerProfile, payload)
  },
  updatePassword(payload: NewPasswordPayload): Promise<APIResponse<unknown>> {
    return appAxiosDefault.put(API_ROUTES.employerPassword, payload)
  },
}
