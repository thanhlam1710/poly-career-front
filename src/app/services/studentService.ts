import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { AvatarPayload } from "interfaces/Company"
import { Student, Profile, NamePayload, EmailPayload } from "interfaces/Student"

export const studentService = {
  getProfile(): Promise<APIResponse<Student>> {
    return appAxiosDefault.get(API_ROUTES.studentProfile)
  },

  updateProfile(payload: Student | AvatarPayload | NamePayload): Promise<APIResponse<Student>> {
    return appAxiosDefault.put(API_ROUTES.studentProfile, payload)
  },

  updateProfileGeneral(payload: Profile): Promise<APIResponse<Profile>> {
    return appAxiosDefault.put(API_ROUTES.studentProfileGeneral, payload)
  },

  updateEmail(payload: EmailPayload): Promise<APIResponse<Student>> {
    return appAxiosDefault.put(API_ROUTES.studentEmail, payload)
  },
}
