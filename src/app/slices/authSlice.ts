import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { notification } from "antd"
import Router from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { registerService } from "app/services/registerService"
import { MESSAGE } from "constants/messages"
import { APIResponse } from "interfaces/APIResponse"
import { RegisterEmployerPayload, RegisterStudentPayload } from "interfaces/Register"
import { AuthState, Login, LoginPayload } from "../../interfaces/Auth"
import { authService } from "../services/authService"

const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  token: "",
  type: undefined,
}

export const registerStudentAction = createAsyncThunk(
  "register/registerStudentAction",
  async (payload: RegisterStudentPayload, thunkAPI) => {
    const response = await registerService.registerStudent(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const loginStudentAction = createAsyncThunk(
  "auth/loginStudentAction",
  async (payload: LoginPayload, thunkAPI) => {
    const response = await authService.loginStudent(payload)
    console.log(response)

    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const registerEmployerAction = createAsyncThunk(
  "register/registerEmployerAction",
  async (payload: RegisterEmployerPayload, thunkAPI) => {
    const response = await registerService.registerEmployer(payload)

    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const loginEmployerAction = createAsyncThunk(
  "auth/loginEmployerAction",
  async (payload: LoginPayload, thunkAPI) => {
    const response = authService.loginEmployer(payload)
    if (!response) return thunkAPI.rejectWithValue(response)
    return response
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      sessionStorage.removeItem("first_login")
      return initialState
    },
    logoutAction: () => initialState,
  },
  extraReducers: {
    [registerStudentAction.pending.type]: (state: AuthState) => {
      state.isLoading = true
    },
    [registerStudentAction.fulfilled.type]: (state: AuthState, action) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success && data) {
        notification.success({
          message: MESSAGE.register.success,
          description: MESSAGE.register.remind,
          duration: 0,
        })
      }
      state.isLoading = false
    },
    [registerStudentAction.rejected.type]: (state: AuthState) => {
      state.isLoading = false
    },
    [loginStudentAction.pending.type]: (state: AuthState) => {
      state.isLoading = true
    },
    [loginStudentAction.fulfilled.type]: (
      state: AuthState,
      action: PayloadAction<APIResponse<Login>>
    ) => {
      const { code, data } = action.payload
      state.isLoading = false
      state.isLoggedIn = true
      if (code === RESPONSE_CODES.success && data) {
        state.token = data.token
        state.type = "student"
        Router.push(ROUTES.home)
      }
    },
    [loginStudentAction.rejected.type]: (state: AuthState) => {
      state.isLoading = false
      state.isLoggedIn = false
    },
    [registerEmployerAction.pending.type]: (state: AuthState) => {
      state.isLoading = true
    },
    [registerEmployerAction.fulfilled.type]: (state: AuthState, action) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success && data) {
        Router.push(ROUTES.loginEmployer)
        notification.success({
          message: MESSAGE.register.success,
          description: MESSAGE.register.remind,
          duration: 0,
        })
      }
      state.isLoading = false
    },
    [registerEmployerAction.rejected.type]: (state: AuthState) => {
      state.isLoading = false
    },
    [loginEmployerAction.pending.type]: (state: AuthState) => {
      state.isLoading = true
    },
    [loginEmployerAction.fulfilled.type]: (
      state: AuthState,
      action: PayloadAction<APIResponse<Login>>
    ) => {
      const { code, data } = action.payload
      state.isLoading = false
      state.isLoggedIn = true
      if (code === RESPONSE_CODES.success && data) {
        state.token = data.token
        state.type = "employer"
      }
    },
    [loginEmployerAction.rejected.type]: (state: AuthState) => {
      state.isLoading = false
      state.isLoggedIn = false
    },
  },
})

const { actions: authActions, reducer: authReducer } = authSlice

export { authActions }
export default authReducer
