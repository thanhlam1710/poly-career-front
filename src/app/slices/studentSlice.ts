import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { notification } from "antd"
import { MESSAGE, RESPONSE_CODES } from "@constants"
import { studentService } from "app/services/studentService"
import { APIResponse } from "interfaces/APIResponse"
import { AvatarPayload } from "interfaces/Company"
import { Student, StudentState, Profile, NamePayload, EmailPayload } from "interfaces/Student"

const initialState: StudentState = {
  studentProfile: undefined,
  isLoading: false,
}

export const getStudentProfileAction = createAsyncThunk(
  "student/getStudentProfileAction",
  async (_, thunkAPI) => {
    const response = await studentService.getProfile()
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateStudentProfileAction = createAsyncThunk(
  "student/updateStudentProfileAction",
  async (payload: Student | NamePayload, thunkAPI) => {
    const response = await studentService.updateProfile(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateStudentProfileGeneralAction = createAsyncThunk(
  "student/updateStudentProfileGeneralAction",
  async (payload: Profile, thunkAPI) => {
    const response = await studentService.updateProfileGeneral(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateImgStudentAction = createAsyncThunk(
  "student/updateImgAction",
  async (payload: AvatarPayload, thunkAPI) => {
    const response = await studentService.updateProfile(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const updateStudentEmailAction = createAsyncThunk(
  "student/updateEmail",
  async (payload: EmailPayload, thunkAPI) => {
    const response = await studentService.updateEmail(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getStudentProfileAction.fulfilled.type]: (
      state: StudentState,
      action: PayloadAction<APIResponse<Student>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.studentProfile = {
          ...data,
          role: data?.role?.toString(),
        }
      }
    },
    [updateStudentProfileAction.fulfilled.type]: (
      state: StudentState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("thông tin"),
        })
      }
    },
    [updateStudentProfileGeneralAction.fulfilled.type]: (
      state: StudentState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("thông tin chung"),
        })
      }
    },
    [updateStudentEmailAction.fulfilled.type]: (
      state: StudentState,
      action: PayloadAction<APIResponse<undefined>>
    ) => {
      state.isLoading = false
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.register.success,
          description: MESSAGE.register.remind,
          duration: 0,
        })
      }
    },
    [updateImgStudentAction.fulfilled.type]: (_, action: PayloadAction<APIResponse<unknown>>) => {
      const { code } = action.payload
      if (code === RESPONSE_CODES.success) {
        notification.success({
          message: MESSAGE.update.success("hình ảnh"),
        })
      }
    },
  },
})

const { actions: studentActions, reducer: studentReducer } = studentSlice

export { studentActions }
export default studentReducer
