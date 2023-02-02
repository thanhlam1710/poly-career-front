import { notification } from "antd"
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios"
import { MESSAGE } from "constants/messages"
import { APIResponse } from "interfaces/APIResponse"
import { store } from "./appStore"

const createAxios = (contentType: string): AxiosInstance => {
  const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": contentType,
    },
  })

  axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const jwtToken = store.getState().auth.token

      if (config.headers && jwtToken) config.headers["authorization"] = `Bearer ${jwtToken}`
      return config
    },
    (error) => {
      notification.error({
        message: MESSAGE.error,
      })
      return Promise.reject(error)
    }
  )

  axiosClient.interceptors.response.use(
    (response: AxiosResponse<APIResponse<unknown>>) => {
      if (response && response.data) return response.data
      return response
    },
    (error) => {
      let noti = {
        message: "",
        description: "",
      }
      if (
        error.response.data.error_field?.length &&
        error.response.data.error_field[0]?.message[0]
      ) {
        noti = {
          message: `${error.response.data.error_field[0].message[0]}`,
          description: "",
        }
      } else if (error.response.data?.error) {
        noti = {
          message: `${MESSAGE.error}`,
          description: `${error.response.data?.error.toUpperCase()}`,
        }
      }

      notification.error(noti)

      return error.response?.data
    }
  )
  return axiosClient
}

const appAxiosDefault = createAxios("application/json")

const axiosFiles = createAxios("multipart/form-data")

export { appAxiosDefault, axiosFiles }
