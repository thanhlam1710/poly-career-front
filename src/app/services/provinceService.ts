import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { Province } from "interfaces/Province"

export const provinceService = {
  getProvince(): Promise<APIResponse<Province[]>> {
    return appAxiosDefault.get(API_ROUTES.province)
  },
}
