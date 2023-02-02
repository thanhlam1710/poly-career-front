import React from "react"
import { Form, Select } from "antd"
import { useAppDispatch } from "app/appHook"
import { updateStatusCVAction } from "app/slices/cvSlice"
import { STATUS_CV } from "constants/cv"
import { CV } from "interfaces/CV"

const { Option } = Select

interface StatusCellProps {
  data: CV
}

const StatusCell: React.FC<StatusCellProps> = ({ data }) => {
  const dispatch = useAppDispatch()
  return (
    <Form
      className="form"
      initialValues={data.status ? { status: Number(data.status) } : { none: "" }}
      onValuesChange={(e) =>
        dispatch(updateStatusCVAction({ id: data.cv_id, payload: { status: e } }))
      }
    >
      <Form.Item name="status">
        <Select placeholder="Chọn" value={data.status}>
          {STATUS_CV.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
}
export default StatusCell
