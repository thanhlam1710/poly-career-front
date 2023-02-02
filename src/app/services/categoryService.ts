import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { Category } from "interfaces/Category"

export const categoryService = {
  getCategory(): Promise<APIResponse<Category[]>> {
    return appAxiosDefault.get(API_ROUTES.categories)
  },
}
