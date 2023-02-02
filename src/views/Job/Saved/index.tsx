import React from "react"
import { Button, Col, Row } from "antd"
import Link from "next/link"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getProvinceAction } from "app/slices/provinceSlice"
import BoxJob from "components/Common/BoxJob/BoxJob"
import { useAppEffect } from "hook/useAppEffect"
import { JobPayload } from "interfaces/Job"
import {
  JobsTitleContainer,
  ListJobsEmptyWrapper,
  ListJobsHasDataWrapper,
  ListJobsSavedWrapper,
} from "../style"

const JobsTitle: React.FC = () => {
  return (
    <JobsTitleContainer>
      <div className="jobs__title">Việc làm đã lưu</div>
      <p className="jobs__text">
        Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để không bỏ lỡ cơ
        hội nghề nghiệp dành cho bạn.
      </p>
    </JobsTitleContainer>
  )
}

const ListJobsEmpty: React.FC = () => {
  return (
    <ListJobsEmptyWrapper>
      <JobsTitle />
      <div className="not__jobs">
        <div className="not__jobs--text">Bạn chưa có công việc nào</div>
        <Link href={ROUTES.job.list}>
          <a>
            <Button className="not__jobs--btn">Tìm việc ngay</Button>
          </a>
        </Link>
      </div>
    </ListJobsEmptyWrapper>
  )
}

interface IListJobsHasData {
  listJobs: JobPayload[]
}

const ListJobsHasData: React.FC<IListJobsHasData> = ({ listJobs }) => {
  const { listProvince } = useAppSelector((state) => state.province)
  const dispatch = useAppDispatch()

  useAppEffect(() => {
    dispatch(getProvinceAction())
  })
  return (
    <ListJobsHasDataWrapper>
      <div>
        <JobsTitle />
        <div className="yet__jobs">
          <div className="yet__jobs--text">
            Danh sách <span>{listJobs?.length}</span> việc làm đã lưu
          </div>
        </div>
      </div>
      <div className="jobs__row">
        {listJobs?.map((item: JobPayload) => (
          <BoxJob data={item} key={item.id} listProvince={listProvince} remove />
        ))}
      </div>
    </ListJobsHasDataWrapper>
  )
}

const ListJobSaved: React.FC = () => {
  const listJobs = useAppSelector((state) => state.savedJob)

  return (
    <ListJobsSavedWrapper>
      <Row className="list__jobs--row">
        <Col xs={24} md={24} lg={24} xl={17}>
          {listJobs.length ? <ListJobsHasData listJobs={listJobs} /> : <ListJobsEmpty />}
        </Col>
        <Col md={24} lg={24} xl={6}>
          <div className="jobs__ads">
            <div className="jobs__ads--item">
              <img
                src="https://i.pinimg.com/736x/7b/59/17/7b59171a759cbf6be4568d43c076ec0b.jpg"
                alt="poster1"
              />
            </div>
            <div className="jobs__ads--item">
              <img
                src="https://img.pikbest.com/01/48/18/10ypIkbEsTFJW.jpg-0.jpg!bw700"
                alt="poster2"
              />
            </div>
          </div>
        </Col>
      </Row>
    </ListJobsSavedWrapper>
  )
}

export default ListJobSaved
