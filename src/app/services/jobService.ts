import { API_ROUTES } from "@constants"
import { appAxiosDefault } from "app/axiosClient"
import { APIResponse } from "interfaces/APIResponse"
import { JobApplyPayload, JobDetailPayload, JobParams, JobPayload } from "interfaces/Job"

export const jobService = {
  getJobs(params?: JobParams): Promise<APIResponse<JobPayload[]>> {
    return appAxiosDefault.get(API_ROUTES.jobs, { params: { ...params } })
  },
  getJobDetail(payload: JobDetailPayload): Promise<APIResponse<JobPayload>> {
    return appAxiosDefault.get(API_ROUTES.jobDetail(payload.id), {
      params: {
        student_id: payload.student_id,
      },
    })
  },
  createaRecruitment(payload: JobPayload): Promise<APIResponse<undefined>> {
    return appAxiosDefault.post(API_ROUTES.job, payload)
  },
  editRecruitment(id: number, payload: JobPayload): Promise<APIResponse<undefined>> {
    return appAxiosDefault.put(API_ROUTES.jobDetail(id), payload)
  },
  editRecruitmentStatus(
    id: number,
    payload: { status: string | number }
  ): Promise<APIResponse<undefined>> {
    return appAxiosDefault.put(API_ROUTES.jobDetail(id), payload)
  },
  applyJob(payload: JobApplyPayload): Promise<APIResponse<[]>> {
    return appAxiosDefault.post(API_ROUTES.applyNew, payload)
  },
  getJobsFit(params?: JobParams): Promise<APIResponse<JobPayload[]>> {
    return appAxiosDefault.get(API_ROUTES.jobFit, { params: { ...params } })
  },
}
