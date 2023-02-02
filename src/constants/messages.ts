export const MESSAGE = {
  error: "Đã có lỗi xảy ra",
  register: {
    success: "Đăng ký tài khoản thành công",
    remind:
      "Chúng tôi đã gửi đến bạn một email xác thực tài khoản. Vui lòng kiểm tra email của bạn",
  },
  password: {
    notMatch: "Mật khẩu bạn nhập không khớp",
  },
  verifyAccount: {
    success: "Xác thực tài khoản thành công",
    fail: "Xác thực tài khoản thất bại",
  },
  create: {
    success: (unit: string) => `Tạo ${unit} thành công`,
  },
  update: {
    success: (unit: string) => `Cập nhật ${unit} thành công`,
  },
  profileStudent: {
    error: (unit: string) => `${unit} hiện tại không khớp`,
  },
}
