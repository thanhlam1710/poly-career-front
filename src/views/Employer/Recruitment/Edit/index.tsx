import React, { useEffect, useState } from "react"
import { Divider } from "antd"
import { useRouter } from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { editRecruitmenAction, getJobDetailAction } from "app/slices/jobSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import RecruitmentForm from "components/Common/Form/RecruitmentForm"
import { APIResponse } from "interfaces/APIResponse"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { RecruimentWrapper } from "../styled"

const EditRecruitment: React.FC = () => {
  const [detailJob, setDetailJob] = useState<JobPayload>()
  const router = useRouter()
  const { id } = router.query
  const dispatch = useAppDispatch()
  const onFinishForm = (values: JobPayload) => {
    const data = {
      ...values,
      count: Number(values.count),
      salary: Number(values.salary),
      province_id: Number(values.province_id),
    }
    const payload = {
      id: Number(id),
      payload: data,
    }
    dispatch(editRecruitmenAction(payload))
  }

  const loadData = async () => {
    if (!id) return
    const result = await dispatch(getJobDetailAction({ id: Number(id) }))

    const payload = result.payload as APIResponse<JobPayload>

    if (payload.code !== RESPONSE_CODES.success) {
      router.push(ROUTES.recruitment.list)
    }
    setDetailJob(payload?.data)
  }

  useEffect(() => {
    loadData()
  }, [id])
  return (
    <RecruimentWrapper>
      <EmployerTitle title="Sửa tin tuyển dụng" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor}>
          <Divider />
          <Container padding="3rem 4rem">
            {detailJob && (
              <RecruitmentForm onSubmitForm={onFinishForm} initialValue={detailJob} isEdit />
            )}
          </Container>
        </Container>
      </Container>
    </RecruimentWrapper>
  )
}

export default EditRecruitment
