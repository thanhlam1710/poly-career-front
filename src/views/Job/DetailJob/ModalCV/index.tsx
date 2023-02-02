import React from "react"
import { InboxOutlined } from "@ant-design/icons"
import { Button, Form, Modal, Upload, UploadFile } from "antd"
import { StoreValue } from "antd/lib/form/interface"
import dynamic from "next/dynamic"
import { API_ROUTES, VALIDATION } from "@constants"
import { APIResponse } from "interfaces/APIResponse"

const { Dragger } = Upload
const InputEditor = dynamic(() => import("components/Common/InputEditor"), {
  ssr: false,
})

interface IDataSubmit {
  dragger: UploadFile<APIResponse<string>>[]
  input_edit: string
}

interface ModalCVProps {
  isModalOpen: boolean
  handleOk: (data: IDataSubmit) => void
  handleCancel: () => void
  title: string
}
const normFile = (e: StoreValue) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

const ModalCV: React.FC<ModalCVProps> = (props) => {
  const [form] = Form.useForm()

  const { isModalOpen, handleOk, handleCancel, title } = props

  return (
    <Modal
      width={800}
      className="modal-cv"
      title={
        <div className="modal-cv__title">
          Ứng tuyển <span className="title__primary">{title}</span>
        </div>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={<></>}
    >
      <Form name="validate_other" form={form} onFinish={handleOk}>
        <Form.Item
          rules={VALIDATION.imageMess}
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger
            className="upload-cv"
            name="file"
            maxCount={1}
            multiple
            action={API_ROUTES.uploadImage}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click hoặc kéo thả vào đây để upload</p>
            <p className="ant-upload-hint">Tải lên từ CV máy tính</p>
          </Dragger>
        </Form.Item>
        <h4>Thư giới thiệu</h4>
        <Form.Item name="input_edit" rules={VALIDATION.inputEditMess}>
          <InputEditor name="input_edit" className="input-editor__cv" maxrows={20} />
        </Form.Item>

        <Form.Item className="form-control__submit">
          <Button onClick={handleCancel}>Đóng lại</Button>
          <Button htmlType="submit" type="primary">
            Nộp CV
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalCV
