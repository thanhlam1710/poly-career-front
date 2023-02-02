import React, { useEffect, useState } from "react"
import { Button, Collapse, Form, Space } from "antd"
import { useRouter } from "next/router"
import { CvCreateInitPayload, RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { createStudentCvAction, cvCreateAction } from "app/slices/cvCreateSlice"
import { APIResponse } from "interfaces/APIResponse"
import { CvCreate } from "interfaces/CV"
import AchievementCvForm from "./AchievementsForm"
import AvatarCvForm from "./AvatarCvForm"
import EducationCvFrom from "./EducationForm"
import ExperienceCvForm from "./ExperienceCvForm"
import GeneralCvForm from "./GeneralForm"
import SettingCvForm from "./SettingCvForm"
import SkillCvForm from "./SkillForm"
import { StudentCvFormWrapper } from "./styled"

interface Props {
  initValue?: CvCreate

  generatePdf: () => void
}

const CvForm: React.FC<Props> = ({ generatePdf, initValue }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const { studentProfile } = useAppSelector((state) => state.student)
  const { cv } = useAppSelector((state) => state.cvCreate)
  const [form] = Form.useForm<CvCreate>()
  const router = useRouter()

  useEffect(() => {
    const newInitValue: CvCreate = {
      ...CvCreateInitPayload,
      full_name: studentProfile?.full_name,
      email: studentProfile?.email,
      phone: studentProfile?.phone,
      avatar: studentProfile?.avatar || "",
      address: studentProfile?.address,
      position: studentProfile?.profile?.position_wish,
    }
    dispatch(cvCreateAction.setCvCreate(newInitValue))

    form.setFieldsValue(newInitValue)
  }, [studentProfile])

  const handleFinish = async (value: CvCreate) => {
    value.experience = value.experience?.map((e) => ({
      ...e,
      date_start: e?.time?.at(0) as string,
      date_end: e.time?.at(1) as string,
    }))
    setLoading(true)
    const rs = await dispatch(createStudentCvAction(value))
    const payload = rs.payload as APIResponse<unknown>
    if (payload.code === RESPONSE_CODES.success) {
      router.push(ROUTES.studentCv.managerCv)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!initValue) return

    form.setFieldsValue(initValue)
    dispatch(cvCreateAction.setCvCreate(initValue))
  }, [initValue])

  return (
    <StudentCvFormWrapper>
      <Form
        form={form}
        layout="vertical"
        size="large"
        initialValues={initValue || CvCreateInitPayload}
        onFinish={handleFinish}
        onValuesChange={(_, value: CvCreate) => {
          dispatch(
            cvCreateAction.setCvCreate({
              ...cv,
              ...value,
            })
          )
        }}
      >
        <Collapse accordion>
          <Collapse.Panel header="Chi tiết CV" key="1">
            <SettingCvForm />
          </Collapse.Panel>

          <Collapse.Panel header="Thông tin chung" key="3">
            <GeneralCvForm />
          </Collapse.Panel>
          <Collapse.Panel header="Ảnh đại diện" key="2">
            <AvatarCvForm />
          </Collapse.Panel>
          <Collapse.Panel header="Kỹ năng" key="4">
            <SkillCvForm />
          </Collapse.Panel>
          <Collapse.Panel header="Quá trình học tập" key="5">
            <EducationCvFrom />
          </Collapse.Panel>
          <Collapse.Panel header="Thành tích" key="6">
            <AchievementCvForm />
          </Collapse.Panel>
          <Collapse.Panel header="Kinh nghiệm làm việc" key="7">
            <ExperienceCvForm />
          </Collapse.Panel>
        </Collapse>
        <Space className="mt-2">
          <Button loading={loading} htmlType="submit" type="primary">
            Tạo CV
          </Button>
          <Button
            disabled={loading}
            htmlType="button"
            onClick={() => {
              generatePdf()
            }}
          >
            Download CV
          </Button>
        </Space>
      </Form>
    </StudentCvFormWrapper>
  )
}

export default CvForm
