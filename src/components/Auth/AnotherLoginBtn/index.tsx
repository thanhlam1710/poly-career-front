import React from "react"
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons"
import { Space } from "antd"
import { LoginAnother } from "./style"

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
})

const AnotherLogin: React.FC = () => {
  return (
    <LoginAnother>
      <p className="title">Hoặc đăng nhập với</p>
      <div className="options">
        <Space size={10}>
          <div className="options--btn login_fb">
            <IconFont type="icon-facebook" />
          </div>
          <div className="options--btn login_gg">
            <GoogleOutlined />
          </div>
        </Space>
      </div>
    </LoginAnother>
  )
}

export default AnotherLogin
