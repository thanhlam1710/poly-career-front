import { createSlice } from "@reduxjs/toolkit"
import { CV } from "interfaces/CV"

interface SavedCVState {
  listSavedCV: CV[]
}
const initialState: SavedCVState = {
  listSavedCV: [],
}

const savedCvSlice = createSlice({
  name: "savedCV",
  initialState,
  reducers: {
    savedCV: (state, action) => {
      if (state.listSavedCV?.some((e) => e.id === Number(action.payload.id))) return
      state.listSavedCV?.push(action.payload)
    },
    removedCV: (state: SavedCVState, action) => {
      const idCV = action.payload
      state.listSavedCV = state.listSavedCV?.filter(
        (savedCV) => Number(savedCV.id) !== Number(idCV)
      )
    },
  },
})

const { actions, reducer: savedCvReducer } = savedCvSlice

export const { savedCV, removedCV } = actions
export default savedCvReducer
