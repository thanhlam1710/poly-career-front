import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { Company, CompanyPayload } from "interfaces/Company"

export const companyService = {
  createCompany(payload: CompanyPayload): Promise<APIResponse<undefined>> {
    return appAxiosDefault.post(API_ROUTES.company, payload)
  },
  updateCompany<T>(payload: T): Promise<APIResponse<unknown>> {
    return appAxiosDefault.put(API_ROUTES.company, payload)
  },
  getCompanyDetail(id: number): Promise<APIResponse<Company>> {
    return appAxiosDefault.get(API_ROUTES.companyDetail(id))
  },
}
