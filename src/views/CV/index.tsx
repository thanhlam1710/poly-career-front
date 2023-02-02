import React, { useEffect, useState } from "react"
import { Col, PageHeader, Row, Spin } from "antd"
import { useRouter } from "next/router"
import { useAppDispatch } from "app/appHook"
import { getStudentCvAction } from "app/slices/cvCreateSlice"
import CvForm from "components/StudentCV/Form"
import CVViews from "components/StudentCV/View"
import { useGeneratePdf } from "hook/useGeneratePdf"
import { APIResponse } from "interfaces/APIResponse"
import { CvCreate } from "interfaces/CV"
import { Container } from "styles/app/styled/Container/styled"
import { CVWrapper } from "./styled"

const CVCreate: React.FC = () => {
  const { ref, generatePdf } = useGeneratePdf()
  const [initialValue, setInitialValue] = useState<CvCreate>()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const id = router.query.id || 0

  const getStudentCv = async () => {
    if (!id || typeof id !== "string") return
    setLoading(true)

    const rs = await dispatch(getStudentCvAction(id))

    const payload = rs.payload as APIResponse<CvCreate>

    setInitialValue(payload.data)
    setLoading(false)
  }

  useEffect(() => {
    getStudentCv()
  }, [id])

  if (id && !initialValue)
    return (
      <Spin spinning={loading}>
        <Container width="100%" height="90vh" />
      </Spin>
    )

  return (
    <CVWrapper>
      <Row>
        <Col span={24}>
          <PageHeader title={id ? "Chỉnh sửa CV" : "Tạo CV"} />
        </Col>
        <Col span={8}>
          <div className="cv__form">
            <CvForm generatePdf={generatePdf} initValue={initialValue} />
          </div>
        </Col>
        <Col span={16}>
          <CVViews viewRef={ref} />
        </Col>
      </Row>
    </CVWrapper>
  )
}

export default CVCreate
