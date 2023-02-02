import { createSlice } from "@reduxjs/toolkit"
import { JobPayload } from "interfaces/Job"

const initialState: JobPayload[] = []

const savedJobSlice = createSlice({
  name: "savedJob",
  initialState,
  reducers: {
    addSavedJob: (state, action) => {
      if (state.some((e) => e.id === Number(action.payload.id))) return
      state.push(action.payload)
    },
    removeSavedJob: (state, action) => {
      const removeSavedJobId = action.payload
      return state.filter((job) => job.id !== removeSavedJobId)
    },
  },
})

const { reducer, actions } = savedJobSlice
export const { addSavedJob, removeSavedJob } = actions
export default reducer
