import React, { useState } from "react"
import { Button, Form, message, Modal, Select } from "antd"
import { useAppDispatch } from "app/appHook"
import { editRecruitmenStatusAction } from "app/slices/jobSlice"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"

interface Props {
  showModel?: boolean
  idJob: (number | string)[]
  setShowModel: (isShow?: boolean) => void
  onChangeSuccess?: (value: string) => void
  initValue?: string
}

const optSelects = [
  { value: "-1", label: "Vui lòng chọn" },
  { value: "0", label: "Không duyệt" },
  { value: "1", label: "Chờ duyệt" },
  { value: "2", label: "Đã duyệt" },
]

const ModelChangeStatusJob: React.FC<Props> = ({
  showModel,
  setShowModel,
  idJob,
  onChangeSuccess,
  initValue,
}) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleFinish = async (value: { status: string }) => {
    if (!idJob.length) return message.error("Đã có lỗi xảy ra")
    const status = Number(value.status)
    if (status < 0) return setShowModel(false)
    try {
      const listChange: Promise<unknown>[] = []

      idJob.forEach((id) =>
        listChange.push(dispatch(editRecruitmenStatusAction({ id: Number(id), status })))
      )
      setLoading(true)
      await Promise.all(listChange)
      setLoading(false)
      if (onChangeSuccess) onChangeSuccess(status.toString())
      setShowModel(false)
    } catch (error) {
      console.log(error)
      message.error("Đã có lỗi xảy ra")
    }
  }

  return (
    <div>
      <Modal
        title="Thay đổi trạng thái"
        open={showModel}
        footer={null}
        onCancel={() => setShowModel && setShowModel(false)}
      >
        <Form
          layout="vertical"
          initialValues={{
            status: initValue ?? "-1",
          }}
          onFinish={handleFinish}
        >
          <Form.Item name="status" label="Trạng thái">
            <Select options={optSelects} />
          </Form.Item>

          <FlexContainer justifyContent="center" className="mt-4">
            <Button type="primary" htmlType="submit" loading={loading}>
              Lưu
            </Button>
          </FlexContainer>
        </Form>
      </Modal>
    </div>
  )
}

export default ModelChangeStatusJob
