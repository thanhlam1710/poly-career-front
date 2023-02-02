import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { CV, CvCreate, CVParams, StatusCVPayload } from "interfaces/CV"

export const cvService = {
  getCVs(params?: CVParams): Promise<APIResponse<CV[]>> {
    return appAxiosDefault.get(API_ROUTES.listCVs, { params: { ...params } })
  },
  getDetailCV(id: number): Promise<APIResponse<CV>> {
    return appAxiosDefault.get(API_ROUTES.detailCV(id))
  },
  updateCV(id: number, payload: StatusCVPayload): Promise<APIResponse<CV>> {
    return appAxiosDefault.put(API_ROUTES.detailCV(id), payload.status)
  },
  createStudentCv: (payload: CvCreate): Promise<APIResponse<unknown>> => {
    return appAxiosDefault.post(API_ROUTES.createStudentCv, payload)
  },
  getStudentCv: (id: number | string): Promise<APIResponse<CvCreate>> => {
    return appAxiosDefault.get(API_ROUTES.getStudentCv(id))
  },
  getMyStudentCv: (): Promise<APIResponse<CV[]>> => {
    return appAxiosDefault.get(API_ROUTES.getMyCv)
  },
}
