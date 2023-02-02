import React, { useEffect, useState } from "react"
import { EditOutlined, EyeOutlined } from "@ant-design/icons"
import { Button, Space, Table, Tag } from "antd"
import { ColumnType } from "antd/lib/table"
import Link from "next/link"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getListJobsAction } from "app/slices/jobSlice"
import ModelChangeStatusJob from "components/admin/ModelChaneStatusJob"
import SearchJobsForm from "components/admin/searchJobForm"
import EmployerTitle from "components/Common/EmployerTitle"
import { APIResponse } from "interfaces/APIResponse"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { formMatDate } from "utils/auth-helper"
import { AdminContainer } from "views/Admin/styled"

interface MapStatusColor {
  [key: string]: {
    color: string
    name: string
  }
}

const mapStatusColor: MapStatusColor = {
  "0": { color: "magenta", name: "Không duyệt" },
  "1": {
    color: "cyan",
    name: "Chờ duyệt",
  },
  "2": { color: "green", name: "Đã Duyệt" },
}

const ListJobsContainer: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [showModelChangeStatus, setShowModelChangeStatus] = useState<boolean>()
  const [selectJobId, setSelectJobId] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const { listJobs } = useAppSelector((state) => state.job)
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    total: 1,
  })

  const dispatch = useAppDispatch()

  const getData = async () => {
    setLoading(true)
    const rs = await dispatch(
      getListJobsAction({
        page: pagination.page,
        check: -1,
      })
    )
    const payload = rs.payload as APIResponse<JobPayload[]>

    if (payload.meta) {
      setPagination({
        ...pagination,
        page: Number(payload.meta.page),
        total: Number(payload.meta.total),
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [pagination.page])

  const columns: ColumnType<JobPayload>[] = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ngày đăng",
      dataIndex: "created_at",
      key: "created_at",
      render: (create_at: string | Date) => formMatDate(create_at),
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "exe_at",
      key: "exe_at",
      render: (_, record) => formMatDate(new Date(record?.created_at || "")),
    },
    {
      title: "Tình trạng tin",
      dataIndex: "status",
      key: "status",
      render: (status: string | number) => {
        return (
          <Tag color={mapStatusColor[status.toString() || "0"].color}>
            {mapStatusColor[status.toString() || "0"].name}
          </Tag>
        )
      },
    },
    {
      title: "Thao tác",
      dataIndex: "Action",
      key: "Action",
      render: (_, record) => (
        <>
          <Space>
            <Link href={record.id ? ROUTES.admin.job.detail(record.id) : ""}>
              <Button type="primary" icon={<EyeOutlined />}>
                chi tiết
              </Button>
            </Link>
            <Button
              danger
              icon={<EditOutlined />}
              onClick={() => {
                if (!record.id) return
                setSelectJobId([record.id])
                setShowModelChangeStatus(true)
              }}
            >
              Chuyển trạng thái
            </Button>
          </Space>
        </>
      ),
    },
  ]

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <>
      <EmployerTitle title="Danh sách tin tuyển dụng" />

      <AdminContainer>
        <div>
          <SearchJobsForm />

          <div className="mt-5">
            <Container height="5rem">
              {!!selectedRowKeys.length && (
                <Button
                  onClick={() => {
                    setSelectJobId(selectedRowKeys.map((e) => +e))
                    setShowModelChangeStatus(true)
                  }}
                >
                  Thay đổi trạng thái
                </Button>
              )}
            </Container>
            <Table
              loading={loading}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={listJobs}
              rowKey="id"
              pagination={pagination}
              onChange={(pagiChange) => {
                const newPagination = {
                  ...pagination,
                  page: pagiChange.current ?? 1,
                }

                setPagination(newPagination)
              }}
            />
          </div>
        </div>
      </AdminContainer>
      {selectJobId.length && (
        <ModelChangeStatusJob
          idJob={selectJobId}
          showModel={showModelChangeStatus}
          onChangeSuccess={() => getData()}
          setShowModel={setShowModelChangeStatus}
        />
      )}
    </>
  )
}

export default ListJobsContainer
