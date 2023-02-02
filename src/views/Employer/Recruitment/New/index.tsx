import React, { useState } from "react"
import { Divider } from "antd"
import EmployerTitle from "components/Common/EmployerTitle"
import EmptyCompany from "components/Common/EmptyCompany"
import RecruitmentForm from "components/Common/Form/RecruitmentForm"
import Progress from "components/Common/Progress/Progress"
import { useProfile } from "hook/useProfile"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { Variable } from "styles/app/variable/Variable"
import { RecruimentWrapper } from "../styled"
import Preview from "./Preview"

const CreateRecruitment: React.FC = () => {
  const [nextStep, setNextStep] = useState(0)
  const [newRecruiment, setNewRecruiment] = useState<JobPayload>()
  const { employerProfile } = useProfile()
  const onFinishForm = (values: JobPayload) => {
    const data = {
      ...values,
      count: Number(values.count),
      salary: Number(values.salary),
      province_id: Number(values.province_id),
    }
    setNextStep(1)
    setNewRecruiment(data)
  }

  const handleBack = () => {
    setNextStep(0)
  }
  return (
    <RecruimentWrapper>
      <EmployerTitle title="Tạo tin tuyển dụng" />
      <Container padding="4rem">
        {employerProfile?.company ? (
          <Container backgroundColor={Variable.color.whiteColor}>
            <Progress current={nextStep} percent={0} />
            <Divider />
            {nextStep === 0 ? (
              <Container padding="3rem 4rem">
                <RecruitmentForm onSubmitForm={onFinishForm} initialValue={newRecruiment} />
              </Container>
            ) : (
              newRecruiment && <Preview newRecruiment={newRecruiment} handleBack={handleBack} />
            )}
          </Container>
        ) : (
          <Container backgroundColor={Variable.color.whiteColor} padding="3rem">
            <EmptyCompany />
          </Container>
        )}
      </Container>
    </RecruimentWrapper>
  )
}

export default CreateRecruitment
