import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RESPONSE_CODES } from "@constants"
import adminService from "app/services/adminService"
import { APIResponse, Meta } from "interfaces/APIResponse"
import { Company } from "interfaces/Company"
import { Employer } from "interfaces/Employer"
import { Student } from "interfaces/Student"

interface AdminSliceState {
  users: {
    params?: Meta
    list?: Employer[]
    fetching: boolean
  }
  student: {
    params?: Meta
    list?: Student[]
    fetching: boolean
  }
  companies: {
    params?: Meta
    list?: Company[]
    fetching?: boolean
  }
}

const initialState: AdminSliceState = {
  student: {
    fetching: false,
    list: [],
    params: {},
  },
  users: {
    fetching: false,
    list: [],
    params: {},
  },
  companies: {
    params: {},
    fetching: false,
    list: [],
  },
}

export const getAllCompanyAction = createAsyncThunk(
  "admin/getAllCompanyAction",
  async (_, { rejectWithValue }) => {
    const rs = await adminService.getAllCompany()
    if (rs.code !== RESPONSE_CODES.success) {
      return rejectWithValue(rs)
    }
    return rs
  }
)

export const getAllEmployerAction = createAsyncThunk(
  "admin/getAllEmployer",
  async (_, { rejectWithValue }) => {
    const rs = await adminService.getAllEmployer({ limit: -1 })
    if (rs.code !== RESPONSE_CODES.success) {
      return rejectWithValue(rs)
    }
    return rs
  }
)
export const getAllStudentAction = createAsyncThunk(
  "admin/getAllStudentAction",
  async (_, { rejectWithValue }) => {
    const rs = await adminService.getAllStudents({ limit: -1 })
    if (rs.code !== RESPONSE_CODES.success) {
      return rejectWithValue(rs)
    }
    return rs
  }
)

const adminSlice = createSlice({
  name: "adminSLice",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getAllCompanyAction.pending.type]: (state) => {
      state.companies.fetching = true
    },
    [getAllCompanyAction.fulfilled.type]: (
      state,
      action: PayloadAction<APIResponse<Company[]>>
    ) => {
      state.companies.list = action.payload.data
      state.companies.fetching = false
    },
    [getAllCompanyAction.rejected.type]: (state) => {
      state.companies.fetching = false
      state.companies.fetching = true
    },
    [getAllEmployerAction.pending.type]: (state) => {
      state.users.fetching = true
    },
    [getAllEmployerAction.fulfilled.type]: (
      state,
      action: PayloadAction<APIResponse<Employer[]>>
    ) => {
      state.users.list = action.payload.data
      state.users.fetching = false
    },
    [getAllEmployerAction.rejected.type]: (state) => {
      state.users.fetching = false
    },
    [getAllStudentAction.pending.type]: (state) => {
      state.student.fetching = true
    },
    [getAllStudentAction.fulfilled.type]: (
      state,
      action: PayloadAction<APIResponse<Student[]>>
    ) => {
      state.student.list = action.payload.data
      state.student.fetching = false
    },
    [getAllStudentAction.rejected.type]: (state) => {
      state.student.fetching = false
    },
  },
})

const { reducer: adminReducer, actions: adminAction } = adminSlice

export { adminAction }

export default adminReducer
