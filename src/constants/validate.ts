import { Rule } from "antd/lib/form"
import { REGEX } from "./regex"

export const VALIDATION = {
  onlyRequired: [{ required: true, message: `Vui lòng nhập '\${label}'` }],
  required: { required: true, message: `Vui lòng nhập '\${label}'` },
  requiredWOLabel: (msg: string) => {
    return { required: true, message: `Vui lòng nhập ${msg}` }
  },
  imageMess: [{ required: true, message: "Vui lòng thêm ảnh!" }],
  inputEditMess: [{ required: true, message: "Vui lòng nhập ít nhất 10 ký tự!", min: 14 }],
  phone: {
    pattern: new RegExp(REGEX.phone),
    message: "Vui lòng nhập đúng số điện thoại",
  },
  whiteSpace: { whitespace: true, message: `'\${label}' không thể là khoảng trắng` },
  number: {
    min: {
      min: 1,
      type: "number",
      message: `'\${label}' phải lớn hơn 0`,
    } as Rule,
  },
  password: {
    min: {
      min: 7,
      message: "Mật khẩu ít nhất 6 ký tự",
    },
  },
  minLength: (number: number, label?: string) => {
    return {
      min: number,
      whitespace: true,
      message: label
        ? `${label} ít nhất ${number} ký tự và không thể là khoảng trắng`
        : `'\${label}' ít nhất ${number} ký tự và không thể là khoảng trắng`,
    }
  },
}
