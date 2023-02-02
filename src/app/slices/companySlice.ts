import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { notification } from "antd"
import Router from "next/router"
import { MESSAGE, RESPONSE_CODES, ROUTES } from "@constants"
import { companyActivitiesService } from "app/services/companyActivitiesService"
import { companyService } from "app/services/companyService"
import { APIResponse } from "interfaces/APIResponse"
import {
  AvatarPayload,
  BannerPayload,
  CompanyActivities,
  CompanyPayload,
  CompanyState,
} from "interfaces/Company"

const initialState: CompanyState = {
  isLoading: false,
  companyActivities: undefined,
}

export const getCompanyActivitiesAction = createAsyncThunk(
  "company/getCompanyActivitiesAction",
  async (_, { rejectWithValue }) => {
    const rs = await companyActivitiesService.getCompanyActivities()

    if (rs?.code !== RESPONSE_CODES.success) {
      rejectWithValue(rs)
    }
    return rs
  }
)

export const createCompanysAction = createAsyncThunk(
  "company/createCompanysAction",
  async (payload: CompanyPayload, thunkAPI) => {
    const response = await companyService.createCompany(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateImgCompanyAction = createAsyncThunk(
  "company/updateImgCompanyAction",
  async (payload: AvatarPayload | BannerPayload, thunkAPI) => {
    const response = await companyService.updateCompany(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const getCompanyDetailAction = createAsyncThunk(
  "company/getCompanyDetailAction",
  async (id: number, thunkAPI) => {
    const response = await companyService.getCompanyDetail(id)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateCompanyAction = createAsyncThunk(
  "company/updateCompanyAction",
  async (payload: CompanyPayload, thunkAPI) => {
    const response = await companyService.updateCompany(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [createCompanysAction.pending.type]: (state: CompanyState) => {
      state.isLoading = true
    },
    [createCompanysAction.fulfilled.type]: (
      state: CompanyState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.create.success("doanh nghiệp"),
        })
        Router.push(ROUTES.employerCompany)
      }
    },
    [getCompanyActivitiesAction.fulfilled.type]: (
      state,
      action: PayloadAction<APIResponse<CompanyActivities[]>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success && data?.length) {
        state.companyActivities = data
      }
    },
    [updateImgCompanyAction.fulfilled.type]: (_, action: PayloadAction<APIResponse<unknown>>) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("hình ảnh"),
        })
      }
    },
    [updateCompanyAction.pending.type]: (state: CompanyState) => {
      state.isLoading = true
    },
    [updateCompanyAction.fulfilled.type]: (
      state: CompanyState,
      action: PayloadAction<APIResponse<unknown>>
    ) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("thông tin công ty"),
        })
        state.isLoading = false
      }
    },
  },
})

const { actions: companyActions, reducer: companyReducer } = companySlice

export { companyActions }
export default companyReducer
