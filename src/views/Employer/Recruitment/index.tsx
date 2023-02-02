import React, { useEffect, useState } from "react"
import { Button, Dropdown, Form, Menu, Select, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import Link from "next/link"
import { ROUTES, STATUS_JOB } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getListJobsAction, jobActions } from "app/slices/jobSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { useProfile } from "hook/useProfile"
import { JobPayload, StatusJob } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { btnPrimary } from "styles/app/variable/Button"
import { Variable } from "styles/app/variable/Variable"
import { convertSelectInputJob, convertStatusJob, formatDate } from "utils/helper"
import { RecruimentWrapper, RecruitmentStatistical } from "./styled"

const { Option } = Select

const menu = (id: number) => (
  <div className="nav-other">
    <Menu
      items={[
        {
          key: "1",
          label: <Link href={ROUTES.recruitment.edit(id)}>Chỉnh sửa</Link>,
        },
        {
          key: "2",
          label: <div>Xóa tin</div>,
        },
      ]}
    />
  </div>
)

const columns: ColumnsType<JobPayload> = [
  {
    title: "Tên tin đăng",
    dataIndex: "title",
    render: (_, data) => (
      <div>
        <div className="recruiment_name">{data.title}</div>
        <div className="sub_title">
          <span className="label">Loại tin: </span>
          <span className="value">Tin không phí</span> | <span className="label">Mã tin: </span>
          <span className="value">{data.id}</span>
        </div>
      </div>
    ),
  },
  {
    title: "Ngày đăng",
    dataIndex: "created_at",
    width: 110,
    render: (_, date) => <div>{formatDate(date.created_at)}</div>,
  },
  {
    title: "Thời hạn nộp",
    dataIndex: "date_end",
    width: 135,
    render: (_, date) => {
      if (!date.created_at) return <></>
      const newDate = new Date(date.created_at)
      newDate.setDate(newDate.getDate() + 7)
      return <div>{formatDate(newDate)}</div>
    },
  },
  // {
  //   title: "Lượt nộp",
  //   dataIndex: "submissions",
  //   width: 90,
  // },
  {
    title: "Tình trạng tin",
    dataIndex: "is_hidden",
    width: 120,
    render: (data) => <div>{data ? "Đang ẩn" : "Đang hiện"}</div>,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    width: 130,
    render: (data) => <div className="condition">{convertStatusJob(data)}</div>,
  },
  {
    title: "Khác",
    dataIndex: "id",
    width: 60,
    render: (id) => (
      <Dropdown overlay={menu(id)} placement="bottomRight" trigger={["click"]}>
        <div className="other">
          <span>...</span>
        </div>
      </Dropdown>
    ),
  },
]

const RecruitmentList: React.FC = () => {
  const [form] = Form.useForm()
  const { listJobs } = useAppSelector((state) => state.job)
  const optionSearch = useAppSelector((state) => state.optionSearch)
  const [isFirstLoad, setIsFirstLoad] = useState(false)
  const [dataOpt, setDataOpt] = useState<JobPayload[]>([])
  const { employerProfile } = useProfile()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (employerProfile && !employerProfile?.company_id) {
      dispatch(jobActions.reset())
    }
    if (employerProfile && employerProfile?.company_id) {
      dispatch(getListJobsAction({ company_id: employerProfile?.company_id, check: -1 }))
    }
  }, [optionSearch])

  useEffect(() => {
    if (isFirstLoad) return
    if (listJobs.length !== 0) {
      setDataOpt([...listJobs])
      setIsFirstLoad(true)
    }
  }, [listJobs])

  return (
    <RecruimentWrapper>
      <EmployerTitle title="Danh sách tin đăng" />
      <Container padding="4rem">
        <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
          {/* Statistical */}
          <FlexContainer justifyContent="space-between">
            <RecruitmentStatistical>
              <Container>
                <p>Tổng số tin đăng</p>
                <p>{listJobs.length}</p>
              </Container>
            </RecruitmentStatistical>
            <RecruitmentStatistical>
              <Container>
                <p>Tin trả phí</p>
                <p>0</p>
              </Container>
            </RecruitmentStatistical>
            <RecruitmentStatistical>
              <Container>
                <p>Tin không phí</p>
                <p>{listJobs.length}</p>
              </Container>
            </RecruitmentStatistical>
          </FlexContainer>
          {/* Filter */}
          <Form
            className="form"
            form={form}
            onReset={() => {
              if (employerProfile && employerProfile?.company_id) {
                dispatch(
                  getListJobsAction({
                    company_id: employerProfile?.company_id,
                    check: -1,
                  })
                )
              }
            }}
            onValuesChange={(value) => {
              if (employerProfile && !employerProfile?.company_id) {
                dispatch(jobActions.reset())
              }
              if (employerProfile && employerProfile?.company_id) {
                dispatch(
                  getListJobsAction({
                    company_id: employerProfile?.company_id,
                    check: -1,
                    ...value,
                  })
                )
              }
            }}
          >
            <FlexContainer gap="2rem" alignItems="baseline" margin="3rem 0">
              <p className="note">Bộ lọc</p>
              <Form.Item className="form-group select">
                <Form.Item name="search">
                  <Select
                    showSearch
                    placeholder="Tất cả tin đăng"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                    }
                    options={convertSelectInputJob(dataOpt)}
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item className="form-group select">
                <Form.Item name="status">
                  <Select placeholder="Tất cả trạng thái">
                    {STATUS_JOB.map((item: StatusJob) => (
                      <Option key={item.id} value={item.id}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
              <Button type="primary" htmlType="reset" style={{ ...btnPrimary, borderRadius: 0 }}>
                Reset
              </Button>
            </FlexContainer>
          </Form>
          {/* Table */}
          <Table columns={columns} dataSource={listJobs} rowKey="id" />
        </Container>
      </Container>
    </RecruimentWrapper>
  )
}

export default RecruitmentList
