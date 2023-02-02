import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { CompanyActivities } from "interfaces/Company"

export const companyActivitiesService = {
  getCompanyActivities(): Promise<APIResponse<CompanyActivities[]>> {
    return appAxiosDefault.get(API_ROUTES.companyActivities)
  },
}
