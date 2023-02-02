import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RESPONSE_CODES } from "@constants"
import { categoryService } from "app/services/categoryService"
import { APIResponse } from "interfaces/APIResponse"
import { Category, CategoryState } from "interfaces/Category"

const initialState: CategoryState = {
  listCategories: [],
}

export const getCategoryAction = createAsyncThunk("categories", async (_, thunkAPI) => {
  const response = await categoryService.getCategory()
  if (!response) return thunkAPI.rejectWithValue(response)
  return response
})

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getCategoryAction.fulfilled.type]: (
      state: CategoryState,
      action: PayloadAction<APIResponse<Category[]>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.listCategories = data
      }
    },
  },
})

const { actions: categoryActions, reducer: categoryReducer } = categorySlice

export { categoryActions }
export default categoryReducer
