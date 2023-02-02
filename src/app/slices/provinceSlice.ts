import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RESPONSE_CODES } from "@constants"
import { store } from "app/appStore"
import { provinceService } from "app/services/provinceService"
import { APIResponse } from "interfaces/APIResponse"
import { Province, ProvinceState } from "interfaces/Province"

const initialState: ProvinceState = {
  listProvince: [],
}

export const getProvinceAction = createAsyncThunk("province", async (_, thunkAPI) => {
  const { listProvince } = store.getState().province
  if (listProvince.length) return thunkAPI.rejectWithValue("")
  const response = await provinceService.getProvince()
  if (!response) return thunkAPI.rejectWithValue(response)
  return response
})

export const provinceSlice = createSlice({
  name: "province",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getProvinceAction.fulfilled.type]: (
      state: ProvinceState,
      action: PayloadAction<APIResponse<Province[]>>
    ) => {
      const { code, data } = action.payload
      if (code === RESPONSE_CODES.success) {
        state.listProvince = data
      }
    },
  },
})

const { actions: provinceActions, reducer: provinceReducer } = provinceSlice

export { provinceActions }
export default provinceReducer
