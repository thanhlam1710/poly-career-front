import { API_ROUTES } from "@constants"
import { axiosFiles } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"

export const fileService = {
  uploadImg(file: File): Promise<APIResponse<string>> {
    const formData = new FormData()
    formData.append("file", file)
    return axiosFiles.post(API_ROUTES.upload, formData)
  },
}
