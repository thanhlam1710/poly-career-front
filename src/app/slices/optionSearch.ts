import { createSlice } from "@reduxjs/toolkit"
import { JobParams } from "interfaces/Job"

const initialState: JobParams = {}

export const optionSearch = createSlice({
  name: "optionSearch",
  initialState,
  reducers: {
    reset: () => initialState,
    addSearch: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

const { actions: searchActions, reducer: optionSearchReducer } = optionSearch

export { searchActions }
export default optionSearchReducer
