import { Meta } from "./APIResponse"
import { Category } from "./Category"
import { Employer } from "./Employer"
import { SubmitFormProps } from "./Form"
import { Province } from "./Province"

export interface JobPayload {
  id?: number
  title: string
  user_id?: number
  category_id: number
  province_id: number
  address: string
  gender: string
  count: number
  experience: string
  job_type: string
  position: string
  salary: number
  level: string
  description: string
  require: string
  benefit: string
  is_hidden?: boolean
  status?: number
  province?: Province
  category?: Category
  author?: Employer
  created_at?: string
  update_at?: string
  deleted_at?: string
}

export interface JobParams extends Meta {
  company_id?: number
  category_id?: number
  job_id?: number
  student_id?: number
  search?: string
  experience?: string
  max?: number
  min?: number
  level?: string
  position?: string
  salary?: string
  status?: number
  check?: number
}

export interface JobState {
  listJobs: JobPayload[]
  listJobsFit: JobPayload[]
  detailJob?: JobPayload
  metaJobs?: Meta
  metaJobsFit?: Meta
  jobSearch?: JobParams
  isLoading: boolean
}

export type RecruitmentNewProps = SubmitFormProps<JobPayload>

export interface JobType {
  id: string
  label: string
}

export interface Experience {
  id: string
  label: string
}

export interface Level {
  id: string
  label: string
}

export interface StatusJob {
  id: number
  label: string
}

export interface Gender {
  id: string
  label: string
}

export interface Salary {
  id: number
  label: string
}

export interface JobEditPayload {
  id: number
  payload: JobPayload
}
export interface JobEditStatusPayload {
  id: number
  status: string | number
}

export interface JobApplyPayload {
  job_id: number
  letter: string
  file_name: string
  file_url: string
}

export interface JobDetailPayload {
  id: number
  student_id?: number
}

export interface SalaryFilter {
  id: number
  label: string
  value: {
    min?: number
    max?: number
  }
}
