import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { notification } from "antd"
import Router from "next/router"
import { MESSAGE, RESPONSE_CODES, ROUTES } from "@constants"
import { jobService } from "app/services/jobService"
import { APIResponse } from "interfaces/APIResponse"
import {
  JobApplyPayload,
  JobDetailPayload,
  JobEditPayload,
  JobEditStatusPayload,
  JobParams,
  JobPayload,
  JobState,
} from "interfaces/Job"

const initialState: JobState = {
  listJobs: [],
  listJobsFit: [],
  detailJob: undefined,
  metaJobs: undefined,
  metaJobsFit: undefined,
  isLoading: false,
}

export const getListJobsAction = createAsyncThunk(
  "job/getListJobsAction",
  async (params?: JobParams) => {
    const response = await jobService.getJobs(params)
    return response
  }
)

export const applyJobAction = createAsyncThunk(
  "job/applyJobAction",
  async (payload: JobApplyPayload) => {
    const response = await jobService.applyJob(payload)
    return response
  }
)

export const getJobDetailAction = createAsyncThunk(
  "job/getJobDetailAction",
  async (payload: JobDetailPayload, thunkAPI) => {
    const response = await jobService.getJobDetail(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const createRecruitmenAction = createAsyncThunk(
  "job/createRecruitmentAction",
  async (payload: JobPayload, thunkAPI) => {
    const response = await jobService.createaRecruitment(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const editRecruitmenAction = createAsyncThunk(
  "job/editRecruitmentAction",
  async (data: JobEditPayload, thunkAPI) => {
    const response = await jobService.editRecruitment(data.id, data.payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)
export const editRecruitmenStatusAction = createAsyncThunk(
  "job/editRecruitmentStatusAction",
  async (data: JobEditStatusPayload, thunkAPI) => {
    const response = await jobService.editRecruitmentStatus(data.id, { status: data.status })
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const getListJobsFitAction = createAsyncThunk(
  "job/getListJobsFitAction",
  async (params?: JobParams) => {
    const response = await jobService.getJobsFit(params)
    return response
  }
)

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getListJobsAction.fulfilled.type]: (
      state: JobState,
      action: PayloadAction<APIResponse<JobPayload[]>>
    ) => {
      const { code, data, meta } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.listJobs = data
        state.metaJobs = meta
      }
    },
    [createRecruitmenAction.pending.type]: (state: JobState) => {
      state.isLoading = true
    },
    [createRecruitmenAction.fulfilled.type]: (
      state: JobState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.create.success("tin tuyển dụng"),
        })
        Router.push(ROUTES.recruitment.list)
      }
    },
    [editRecruitmenAction.pending.type]: (state: JobState) => {
      state.isLoading = true
    },
    [editRecruitmenAction.fulfilled.type]: (
      state: JobState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("tin tuyển dụng"),
        })
        Router.push(ROUTES.recruitment.list)
      }
    },
    [getListJobsFitAction.fulfilled.type]: (
      state: JobState,
      action: PayloadAction<APIResponse<JobPayload[]>>
    ) => {
      const { code, data, meta } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.listJobsFit = data
        state.metaJobsFit = meta
      }
    },
    [getJobDetailAction.pending.type]: (state: JobState) => {
      state.isLoading = true
    },
    [getJobDetailAction.fulfilled.type]: (
      state: JobState,
      action: PayloadAction<APIResponse<JobPayload>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.detailJob = data
        state.isLoading = false
      }
    },
  },
})

const { actions: jobActions, reducer: jobReducer } = jobSlice

export { jobActions }
export default jobReducer
