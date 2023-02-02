import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { notification } from "antd"
import { MESSAGE, RESPONSE_CODES } from "@constants"
import { employerService } from "app/services/employerService"
import { APIResponse } from "interfaces/APIResponse"
import { AvatarPayload } from "interfaces/Company"
import { Employer, EmployerPayload, EmployerState, NewPasswordPayload } from "interfaces/Employer"

const initialState: EmployerState = {
  isLoading: false,
  employerProfile: undefined,
}

export const getEmployerProfileAction = createAsyncThunk(
  "employer/getEmployerProfileAction",
  async (_, thunkAPI) => {
    const response = await employerService.getProfile()
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateImgEmployerAction = createAsyncThunk(
  "employer/updateImgEmployerAction",
  async (payload: AvatarPayload, thunkAPI) => {
    const response = await employerService.updateProfile(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateEmployerAction = createAsyncThunk(
  "company/updateEmployerAction",
  async (payload: EmployerPayload, thunkAPI) => {
    const response = await employerService.updateProfile(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateEmployerPWAction = createAsyncThunk(
  "company/updateEmployerPWAction",
  async (payload: NewPasswordPayload, thunkAPI) => {
    const response = await employerService.updatePassword(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getEmployerProfileAction.fulfilled.type]: (
      state: EmployerState,
      action: PayloadAction<APIResponse<Employer>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.employerProfile = {
          ...data,
          role: data.role.toString(),
        }
      }
    },
    [updateImgEmployerAction.fulfilled.type]: (_, action: PayloadAction<APIResponse<unknown>>) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("hình ảnh"),
        })
      }
    },
    [updateEmployerAction.pending.type]: (state: EmployerState) => {
      state.isLoading = true
    },
    [updateEmployerAction.fulfilled.type]: (
      state: EmployerState,
      action: PayloadAction<APIResponse<unknown>>
    ) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("thông tin liên hệ"),
        })
        state.isLoading = false
      }
    },
    [updateEmployerPWAction.pending.type]: (state: EmployerState) => {
      state.isLoading = true
    },
    [updateEmployerPWAction.fulfilled.type]: (
      state: EmployerState,
      action: PayloadAction<APIResponse<unknown>>
    ) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("mật khẩu"),
        })
      }
      state.isLoading = false
    },
  },
})

const { actions: employerActions, reducer: employerReducer } = employerSlice

export { employerActions }
export default employerReducer
