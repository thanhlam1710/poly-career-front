import React, { useState } from "react"
import { Button, Form, Input } from "antd"
import { RESPONSE_CODES, VALIDATION } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateStudentEmailAction, updateStudentProfileAction } from "app/slices/studentSlice"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { EmailPayload, Name, Student } from "interfaces/Student"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import ModalProfile from "./ModalProfile"

interface RegisterInforProps {
  studentProfile: Student
}

const RegisterInfor: React.FC<RegisterInforProps> = ({ studentProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [typeModal, setTypeModal] = useState("")
  const dispatch = useAppDispatch()
  const { updateUser } = useProfile()

  const showModal = (name: string) => {
    setIsModalOpen(true)
    setTypeModal(name)
  }

  const hideModal = () => {
    setIsModalOpen(false)
    setTypeModal("")
  }

  const onSubmitModal = (e: any) => {
    console.log("modal", e)
    hideModal()
  }

  const onSubmitNameModal = async (data: Name) => {
    const payload = { full_name: data.new_name }
    const response = await dispatch(updateStudentProfileAction(payload))
    const rp = response.payload as APIResponse<unknown>
    if (rp.code === RESPONSE_CODES.success) {
      updateUser()
    }
    hideModal()
  }

  const onSubmitEmailModal = async (data: EmailPayload) => {
    const payload = { new_email: data.new_email }
    console.log(payload)

    const response = await dispatch(updateStudentEmailAction(payload))
    const rp = response.payload as APIResponse<unknown>
    if (rp.code === RESPONSE_CODES.success) {
      updateUser()
    }
    hideModal()
  }

  return (
    <Form>
      <GridContainer padding="2rem 0">
        <div className="student-profile">
          <ModalProfile
            handleCancel={hideModal}
            isModalOpen={isModalOpen}
            typeModal={typeModal}
            onSubmitModal={onSubmitModal}
            onSubmitNameModal={onSubmitNameModal}
            onSubmitEmailModal={onSubmitEmailModal}
            fill={studentProfile}
          />
        </div>
        <div className="row row__first">
          <div className="header">
            <p>Thông tin đăng ký</p>
          </div>
          <div className="body">
            <GridContainer rowGap="2rem">
              <Form.Item
                className="form-group"
                label="Địa chỉ email"
                rules={VALIDATION.onlyRequired}
              >
                <Input readOnly value={studentProfile?.email} placeholder="Vui lòng thêm Email" />
                <Button onClick={() => showModal("email")}>Sửa</Button>
              </Form.Item>
              <Form.Item className="form-group" label="Họ và tên" rules={[VALIDATION.whiteSpace]}>
                <Input readOnly value={studentProfile?.full_name} placeholder="Họ tên của bạn" />
                <Button onClick={() => showModal("name")}>Sửa</Button>
              </Form.Item>
              <Form.Item className="form-group" label="Mật khẩu">
                <Input readOnly placeholder="*********" />
                <Button onClick={() => showModal("password")}>Sửa</Button>
              </Form.Item>
            </GridContainer>
          </div>
        </div>
      </GridContainer>
    </Form>
  )
}

export default RegisterInfor
