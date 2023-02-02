import { CombinedState, combineReducers, configureStore, PayloadAction } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import adminReducer from "./slices/adminSlice"
import authReducer from "./slices/authSlice"
import categoryReducer from "./slices/categorySlice"
import companyReducer from "./slices/companySlice"
import cvCreateReducer from "./slices/cvCreateSlice"
import cvReducer from "./slices/cvSlice"
import employerReducer from "./slices/employerSlice"
import jobReducer from "./slices/jobSlice"
import optionSearchReducer from "./slices/optionSearch"
import provinceReducer from "./slices/provinceSlice"
import savedCvReducer from "./slices/savedCV"
import savedJobReducer from "./slices/savedJobSlice"
import studentReducer from "./slices/studentSlice"

const rootPersistConfig = {
  key: "root:poly-career",
  storage,
  whitelist: ["auth", "student", "employer", "savedJob", "savedCV", "province", "optionSearch"],
}

const reducers = combineReducers({
  auth: authReducer,
  job: jobReducer,
  student: studentReducer,
  employer: employerReducer,
  province: provinceReducer,
  categories: categoryReducer,
  company: companyReducer,
  savedJob: savedJobReducer,
  cv: cvReducer,
  optionSearch: optionSearchReducer,
  adminList: adminReducer,
  cvCreate: cvCreateReducer,
  savedCV: savedCvReducer,
})

const rootReducer = (state: CombinedState<any>, action: PayloadAction) => {
  // clear all states after logout
  if (action.type === "auth/logoutAction") {
    return reducers(
      {
        ...state,
        auth: undefined,
        student: undefined,
        employer: undefined,
      },
      action
    )
  }
  // khi nao có action logut, sẽ set lai
  return reducers(state, action)
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
