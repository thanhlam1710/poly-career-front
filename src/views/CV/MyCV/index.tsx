import React, { useCallback, useEffect, useState } from "react"
import { InboxOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons"
import { Button, Col, Form, Modal, Row, UploadFile } from "antd"
import { StoreValue } from "antd/lib/form/interface"
import Dragger from "antd/lib/upload/Dragger"
import Link from "next/link"
import { API_ROUTES, RESPONSE_CODES, ROUTES, VALIDATION } from "@constants"
import { useAppDispatch } from "app/appHook"
import { getMyStudentCvAction } from "app/slices/cvCreateSlice"
import CvItemCard from "components/ListCv/CvItemCard"
import { APIResponse } from "interfaces/APIResponse"
import { CvDetail } from "interfaces/CV"
import { WrapperMyCV } from "./styled"

interface IDataSubmit {
  dragger: UploadFile<APIResponse<string>>[]
  title: string
}

const MyCV: React.FC = () => {
  const [form] = Form.useForm()
  const [onModal, setOnModal] = useState(false)
  const [listMyCv, setListMyCv] = useState<CvDetail[]>([])
  const dispatch = useAppDispatch()

  const handleCancel = () => {
    setOnModal(false)
  }

  const getListMyCv = useCallback(async () => {
    const rs = await dispatch(getMyStudentCvAction())
    const payload = rs.payload as APIResponse<CvDetail[]>

    if (payload.code !== RESPONSE_CODES.success || !payload.data?.length) return
    setListMyCv(payload.data)
  }, [])

  useEffect(() => {
    getListMyCv()
  }, [])

  const normFile = (e: StoreValue) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const handleOk = (e: IDataSubmit) => {
    console.log(e)
  }

  return (
    <WrapperMyCV>
      <div className="box-block">
        <div className="box-header">
          <h1 className="title">CV đã tạo trên TopCV</h1>
          <div className="box-control__add">
            <div className="upload__my-cv">
              <Button
                onClick={() => setOnModal(true)}
                type="primary"
                className="btn__show-modal-upload"
              >
                <UploadOutlined />
                Tải CV của bạn lên
              </Button>
            </div>
            <Link href={ROUTES.studentCv.listTemplate}>
              <Button className="btn-add-cv" type="primary">
                <PlusOutlined />
                Tạo mới
              </Button>
            </Link>
          </div>
        </div>

        <Row gutter={10} className="box-content">
          {listMyCv.map((e) => (
            <Col key={e.id} span={12}>
              <CvItemCard data={e} />
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        width={800}
        className="modal-cv"
        title={<div className="modal-cv__title">a</div>}
        open={onModal}
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

          <Form.Item className="form-control__submit">
            <Button onClick={handleCancel}>Đóng lại</Button>
            <Button htmlType="submit" type="primary">
              Nộp CV
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </WrapperMyCV>
  )
}
export default MyCV
