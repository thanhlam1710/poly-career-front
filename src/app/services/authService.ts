// import { API_ROUTES } from "../../constants"
import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { Login, LoginPayload } from "interfaces/Auth"

export const authService = {
  loginStudent(payload: LoginPayload): Promise<APIResponse<Login>> {
    return appAxiosDefault.post(API_ROUTES.loginStudent, payload)
  },
  loginEmployer(payload: LoginPayload): Promise<APIResponse<Login>> {
    return appAxiosDefault.post(API_ROUTES.loginEmployer, payload)
  },

  logout(): APIResponse<undefined> {
    return {
      code: "200",
      status: "Success",
      message: "Logout success",
      data: undefined,
    }
  },
}
