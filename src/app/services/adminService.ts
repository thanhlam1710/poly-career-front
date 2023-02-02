import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse, Meta } from "interfaces/APIResponse"
import { Company } from "interfaces/Company"
import { Employer } from "interfaces/Employer"
import { Student } from "interfaces/Student"

const adminService = {
  getAllStudents: (params?: Meta): Promise<APIResponse<Student[]>> => {
    return appAxiosDefault.get(API_ROUTES.adminStudents, { params })
  },
  getAllEmployer: (params?: Meta): Promise<APIResponse<Employer[]>> => {
    return appAxiosDefault.get(API_ROUTES.adminEmployer, { params })
  },
  getAllCompany: (): Promise<APIResponse<Company[]>> => {
    return appAxiosDefault.get(API_ROUTES.allCompany)
  },
}

export default adminService
