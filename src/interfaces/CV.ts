import moment from "moment"
import { JobPayload } from "./Job"
import { Student } from "./Student"

export interface StatusCV {
  id: number
  label: string
}

export interface StatusCVPayload {
  status: number
}

export interface UpdateStatusCV {
  id: number
  payload: StatusCVPayload
}

export interface CVParams {
  status?: number
  job_id?: string
  date_from?: string
  date_to?: string
  page?: number
  limit?: number
}

export interface CvCreateSkill {
  name?: string
  description?: string
}
export interface CvCreateAchievement {
  name: string
}
export interface CvCreateEducation {
  name?: string
  major?: string
  type?: string
  grade?: string
}
export interface CvCreateExperience {
  name?: string
  position?: string
  time?: (string | Date | moment.Moment)[]
  date_start?: string | Date
  date_end?: string | Date
  description?: string
}

export interface CvCreate {
  id?: number
  title?: string
  full_name?: string
  email?: string
  position?: string
  phone?: string
  goals?: string
  main_color?: string
  address?: string
  avatar?: string
  skill?: CvCreateSkill[]
  education?: CvCreateEducation[]
  achievements?: CvCreateAchievement[]
  experience?: CvCreateExperience[]
}

export interface CvDetail {
  id: number
  title: string
  link: string
  created_at: string
  deleted_at: string
  student: Student
  cv?: CvCreate
}

export interface CV {
  id: number
  job_id: number
  cv_id: number
  status: number
  letter: string
  date_apply: string
  updated_at: string
  job: JobPayload
  cv: CvDetail
}

export interface CVState {
  listCV: CV[]
  detailCV?: CV
  isLoading: boolean
  metaCV?: CVParams
}
