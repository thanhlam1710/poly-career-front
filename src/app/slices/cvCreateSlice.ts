import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment from "moment"
import { cvService } from "app/services/cvService"
import { CvCreate } from "interfaces/CV"

interface CvCreateInterface {
  cv?: CvCreate
}

const initialState: CvCreateInterface = {
  cv: undefined,
}

export const createStudentCvAction = createAsyncThunk(
  "cvcreate/createStudentCvAction",
  async (payload: CvCreate, { rejectWithValue }) => {
    const rs = await cvService.createStudentCv(payload)

    if (!rs) rejectWithValue(rs)
    return rs
  }
)

export const getStudentCvAction = createAsyncThunk(
  "studentcv/getStudentCvAction",
  async (id: number | string, { rejectWithValue }) => {
    const rs = await cvService.getStudentCv(id)
    if (!rs) rejectWithValue(rs)

    rs.data.experience = rs.data.experience?.map((e) => ({
      ...e,
      time: [moment(e.date_start), moment(e.date_end)],
    }))

    return rs
  }
)

export const getMyStudentCvAction = createAsyncThunk(
  "studentcv/getMyStudentCv",
  async (_, { rejectWithValue }) => {
    const rs = await cvService.getMyStudentCv()
    if (!rs) rejectWithValue(rs)
    return rs
  }
)

const cvCreateSlice = createSlice({
  name: "cvCreateSlice",
  initialState,
  reducers: {
    onReset: () => initialState,
    setCvCreate: (state, actions: PayloadAction<CvCreate>) => {
      state.cv = actions.payload
    },
  },
})

const { actions: cvCreateAction, reducer: cvCreateReducer } = cvCreateSlice

export { cvCreateAction }

export default cvCreateReducer
