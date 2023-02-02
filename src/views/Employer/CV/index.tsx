import React from "react"
import { Dropdown, Form, Menu, Select, Table } from "antd"
import { ColumnsType, TableProps } from "antd/es/table"
import moment from "moment"
import Link from "next/link"
import { LIST_CV_FILTER, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { cvActions, getListCVAction } from "app/slices/cvSlice"
import { getListJobsAction } from "app/slices/jobSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { STATUS_CV } from "constants/cv"
import { useAppEffect } from "hook/useAppEffect"
import { useProfile } from "hook/useProfile"
import { CV, CVParams } from "interfaces/CV"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { Variable } from "styles/app/variable/Variable"
import { convertDownloadURL, formatDate } from "utils/helper"
import StatusCell from "./StatusCell"
import { CVTitle, CVWrapper } from "./styled"

const { Option } = Select

const menu = (id: number, link: string) => (
  <div className="nav-other">
    <Menu
      items={[
        {
          key: "1",
          label: <Link href={ROUTES.CV.detail(id)}>Xem hồ sơ</Link>,
        },
        {
          key: "2",
          label: (
            <a href={convertDownloadURL(link)} download>
              <div>Tải CV</div>
            </a>
          ),
        },
        {
          key: "3",
          label: <div>Xóa hồ sơ</div>,
        },
      ]}
    />
  </div>
)

const columns: ColumnsType<CV> = [
  {
    title: "Tên ứng viên",
    dataIndex: "candidate_name",
    width: "30%",
    render: (_, data) => {
      const currentYear = new Date().getFullYear()
      const birthYear = new Date(data.cv.student?.birthday || "").getFullYear()

      const age = currentYear - birthYear
      return (
        <div>
          <div className="name">
            <span className="candidate_name">{data.cv.student.full_name}</span>{" "}
            {age ? <span className="candidate_age">({age} tuổi)</span> : <></>}
          </div>
          {data.cv.student.profile?.position_wish ? (
            <div className="candidate_position">{data.cv.student.profile.position_wish}</div>
          ) : (
            <></>
          )}
        </div>
      )
    },
  },
  {
    title: "Vị trí ứng tuyển",
    dataIndex: "position_apply",
    render: (_, data) => <div>{data.job.title}</div>,
  },
  {
    title: "Thời gian nộp",
    dataIndex: "cv_create_at",
    width: 135,
    sorter: {
      compare: (a, b) => Number(a.date_apply) - Number(b.date_apply),
      multiple: 2,
    },
    render: (_, data) => <div>{formatDate(data.date_apply)}</div>,
  },
  {
    title: "Trạng thái tuyển dụng",
    dataIndex: "recruitment_condition",
    width: 185,
    render: (_, data) => <StatusCell data={data} />,
  },
  {
    title: "Khác",
    width: 60,
    render: (_, data) => (
      <Dropdown overlay={menu(data.id, data.cv.link)} placement="bottomRight" trigger={["click"]}>
        <div className="other">
          <span>...</span>
        </div>
      </Dropdown>
    ),
  },
]
const CVCPN: React.FC = () => {
  const { listCV } = useAppSelector((state) => state.cv)
  const { listJobs } = useAppSelector((state) => state.job)
  const dispatch = useAppDispatch()
  const { addSearch } = cvActions
  const { employerProfile } = useProfile()

  const onChange: TableProps<any>["onChange"] = () => {
    dispatch(getListCVAction())
  }

  const handleSearchFilter = (e: CVParams) => {
    const { date_from } = e || {}
    dispatch(addSearch(e))
    dispatch(
      getListCVAction({
        job_id: e.job_id,
        status: e.status,
        date_from: date_from && moment(date_from).format("YYYY-MM-DD"),
      })
    )
  }

  useAppEffect(() => {
    dispatch(getListCVAction())
    if (employerProfile && employerProfile?.company_id) {
      dispatch(getListJobsAction({ company_id: employerProfile?.company_id }))
    }
  })

  return (
    <CVWrapper>
      <EmployerTitle title="Hồ sơ ứng tuyển" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          <CVTitle>
            <span className="title">Tất cả hồ sơ</span>{" "}
            <span className="sub-title">({listCV.length} hồ sơ)</span>
          </CVTitle>
          <Form className="form" initialValues={LIST_CV_FILTER} onValuesChange={handleSearchFilter}>
            <FlexContainer gap="2rem" alignItems="baseline" margin="3rem 0">
              <p className="note">Bộ lọc</p>
              <Form.Item className="form-group select">
                <Form.Item name="job_id">
                  <Select placeholder={LIST_CV_FILTER.cv_title}>
                    {listJobs.map((item: JobPayload) => (
                      <Option key={item.id} id={item.id} value={item.id}>
                        {item.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
              {/* <Form.Item className="form-group select">
                <Form.Item name="date_from">
                  <Select placeholder={LIST_CV_FILTER.cv_create_at}>
                    {listCV.map((item: CV) => (
                      <Option key={item.id} id={item.id} value={item.date_apply}>
                        {formatDate(item.date_apply)}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item> */}
              <Form.Item className="form-group select">
                <Form.Item name="status">
                  <Select placeholder={LIST_CV_FILTER.cv_status_recruitment}>
                    {STATUS_CV.map((item) => (
                      <Option key={item.id} id={item.id} value={item.id}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
            </FlexContainer>
          </Form>
          <Table
            className="table-cv"
            columns={columns}
            dataSource={listCV}
            onChange={onChange}
            rowKey="id"
          />
        </Container>
      </Container>
    </CVWrapper>
  )
}

export default CVCPN
