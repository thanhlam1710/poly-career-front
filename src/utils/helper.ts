import moment from "moment"
import { JobPayload } from "interfaces/Job"
import { Province } from "interfaces/Province"

export const formatCurrency = (money: number | string | undefined): string => {
  if (money) {
    return new Intl.NumberFormat().format(Number(money))
  }
  return "Thỏa thuận"
}

export const convertSelectInput = (data: Province[]) => {
  return [
    ...data.map((item: Province) => {
      return {
        value: item.id.toString(),
        label: item.name,
      }
    }),
  ]
}

export const convertSelectInputJob = (data: JobPayload[]) => {
  return [
    ...data.map((item: JobPayload) => {
      return {
        value: item.title,
        label: item.title,
      }
    }),
  ]
}

export const convertStatusJob = (data: number) => {
  if (data === 1) return "Chờ duyệt"
  if (data === 2) return "Đã duyệt"
  return "Không duyệt"
}

export const formatNullData = (data: string | number | undefined) => {
  if (!data) return "Không có"
  return data
}

export const formatSalary = (salary: string | number | undefined, symbol?: boolean) => {
  if (!salary) return ""
  return `${salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${symbol ? "VND" : ""}`
}

export const formatDate = (date: string | number | Date | undefined) => {
  if (!date) return ""
  return moment(new Date(date)).format("DD/MM/YYYY")
}
export const formatDateWithFormat = (
  date: string | number | Date | undefined,
  format = "DD/MM/YYYY"
) => {
  if (!date) return ""
  return moment(new Date(date)).format(format)
}

export const convertDownloadURL = (url?: string) => {
  if (!url) return ""
  const arrUrl = url.split("/")
  arrUrl.splice(6, 0, "fl_attachment")
  return arrUrl.join("/")
}

function removeAccents(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

/**
 *
 * @param str1 str
 * @param str2 str
 * @returns str1.includes(str2)
 */
export const compareStringNotVi = (str1: string, str2: string) => {
  return removeAccents(str1.toLocaleLowerCase()).includes(str2.toLocaleLowerCase())
}
/**
 * @param  {string} hexcolor
 * @returns boolean {true} màu sáng
 * @returns boolean {false} màu tối
 */
export const getColorContrast = (hexcolor: string): boolean => {
  const newHexcolor = hexcolor.replace("#", "")
  const r = parseInt(newHexcolor.substr(0, 2), 16)
  const g = parseInt(newHexcolor.substr(2, 2), 16)
  const b = parseInt(newHexcolor.substr(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128
}
