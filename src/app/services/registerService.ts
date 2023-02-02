import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { RegisterEmployerPayload, RegisterStudentPayload } from "interfaces/Register"

export const registerService = {
  registerStudent(payload: RegisterStudentPayload): Promise<APIResponse<undefined>> {
    return appAxiosDefault.post(API_ROUTES.registerStudent, payload)
  },
  registerEmployer(payload: RegisterEmployerPayload): Promise<APIResponse<undefined>> {
    return appAxiosDefault.post(API_ROUTES.registerEmployer, payload)
  },
}
