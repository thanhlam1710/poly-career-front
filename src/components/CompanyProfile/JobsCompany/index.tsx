import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getListJobsAction } from "app/slices/jobSlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import BoxJob from "components/Common/BoxJob/BoxJob"
import TitleComponent from "components/Common/Title/TitleComponent"
import { JobPayload } from "interfaces/Job"
import { JobsCompanyContainer, JobsListContainer } from "./styled"

const JobsCompany: React.FC = () => {
  const { listJobs } = useAppSelector((state) => state.job)
  const { listProvince } = useAppSelector((state) => state.province)
  const router = useRouter()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getListJobsAction({ company_id: Number(router.query.id) }))
    dispatch(getProvinceAction())
  }, [router.query.id])
  return (
    <JobsCompanyContainer>
      <TitleComponent title="Vị trí đang tuyển" />
      <JobsListContainer>
        {listJobs.map((item: JobPayload) => (
          <BoxJob data={item} key={item.id} border listProvince={listProvince} />
        ))}
      </JobsListContainer>
    </JobsCompanyContainer>
  )
}

export default JobsCompany
