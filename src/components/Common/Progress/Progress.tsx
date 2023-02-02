import React from "react"
import { Steps } from "antd"
import ProgressWrapper from "./styled"

interface ProgressProps {
  current: any
  percent: any
}

const Progress: React.FC<ProgressProps> = ({ current, percent }) => {
  return (
    <ProgressWrapper>
      <Steps current={current} percent={percent}>
        <Steps.Step title="Nhập thông tin" />
        <Steps.Step title="Xem trước thông tin" />
      </Steps>
    </ProgressWrapper>
  )
}

export default Progress
