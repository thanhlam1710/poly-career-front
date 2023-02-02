import React, { useState } from "react"
import { Button, Checkbox } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { createRecruitmenAction } from "app/slices/jobSlice"
import BoxDetailJob from "components/Common/BoxDetailJob"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { WrapperButton, WrapperBorder } from "../styled"

interface PreviewProps {
  newRecruiment: JobPayload
  handleBack: () => void
}

const Preview: React.FC<PreviewProps> = ({ newRecruiment, handleBack }) => {
  const [isCheck, setIsCheck] = useState(false)
  const { isLoading } = useAppSelector((state) => state.job)
  const dispatch = useAppDispatch()

  const router = useRouter()
  const onChange = () => {
    setIsCheck((prev) => !prev)
  }

  const onCancel = () => {
    router.push(ROUTES.recruitment.list)
  }

  const handleSubmit = (payload: JobPayload) => {
    dispatch(createRecruitmenAction(payload))
  }
  return (
    <Container padding="4rem">
      <WrapperBorder>
        <div className="border">
          <BoxDetailJob defaultData={newRecruiment} />
        </div>
        <WrapperButton>
          <div className="checkbox">
            <Checkbox onChange={onChange}>
              <span>
                Bằng việc tạo tin tuyển dụng, bạn xác nhận đồng ý với các điều kiện và điều khoản sử
                dụng với PolyCareer
              </span>
            </Checkbox>
          </div>
          <FlexContainer justifyContent="flex-end">
            <Button onClick={onCancel}>Hủy bỏ</Button>
            <Button onClick={handleBack}>Chỉnh sửa</Button>
            <Button
              type="primary"
              disabled={!isCheck}
              loading={isLoading}
              onClick={() => handleSubmit(newRecruiment)}
            >
              Hoàn thành
            </Button>
          </FlexContainer>
        </WrapperButton>
      </WrapperBorder>
    </Container>
  )
}

export default Preview
