import React from "react"
import { Form } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { cvCreateAction } from "app/slices/cvCreateSlice"
import UploadImg from "components/Common/Upload/UploadImg"

const AvatarCvForm: React.FC = () => {
  const { cv } = useAppSelector((state) => state.cvCreate)
  const dispatch = useAppDispatch()
  const { setFieldValue } = Form.useFormInstance()
  return (
    <>
      <Form.Item name="avatar">
        <UploadImg
          url={cv?.avatar || ""}
          handleUpload={(url) => {
            setFieldValue("avatar", url)

            dispatch(cvCreateAction.setCvCreate({ ...cv, avatar: url }))
          }}
        />
      </Form.Item>
    </>
  )
}

export default AvatarCvForm
