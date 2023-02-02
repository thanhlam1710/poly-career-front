import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RESPONSE_CODES } from "@constants"
import { cvService } from "app/services/cvService"
import { APIResponse } from "interfaces/APIResponse"
import { CV, CVParams, CVState, UpdateStatusCV } from "interfaces/CV"

const initialState: CVState = {
  listCV: [],
  detailCV: undefined,
  isLoading: false,
  metaCV: undefined,
}

export const getListCVAction = createAsyncThunk("cv/getListCVAction", async (params?: CVParams) => {
  const response = await cvService.getCVs(params)
  return response
})

export const getDetailCVAction = createAsyncThunk("cv/getDetailCVAction", async (id: number) => {
  const response = await cvService.getDetailCV(id)
  return response
})

export const updateStatusCVAction = createAsyncThunk(
  "cv/getDetailCVAction",
  async (data: UpdateStatusCV) => {
    const response = await cvService.updateCV(data.id, data.payload)
    return response
  }
)

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    reset: () => initialState,
    addSearch: (state, action) => {
      state.metaCV = {
        ...state.metaCV,
        ...action.payload,
      }
    },
  },
  extraReducers: {
    [getListCVAction.fulfilled.type]: (
      state: CVState,
      action: PayloadAction<APIResponse<CV[]>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.listCV = data
      }
    },
    [getDetailCVAction.pending.type]: (state: CVState) => {
      state.isLoading = true
    },
    [getDetailCVAction.fulfilled.type]: (
      state: CVState,
      action: PayloadAction<APIResponse<CV>>
    ) => {
      state.isLoading = false
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.detailCV = data
      }
    },
  },
})

const { actions: cvActions, reducer: cvReducer } = cvSlice

export { cvActions }
export default cvReducer
