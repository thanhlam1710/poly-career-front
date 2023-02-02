import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Descriptions,
  Divider,
  Drawer,
  Input,
  Popconfirm,
  Space,
  Table,
  Tag,
  Typography,
} from "antd"
import { ColumnsType } from "antd/lib/table"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getAllEmployerAction } from "app/slices/adminSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { Employer } from "interfaces/Employer"
import { compareStringNotVi } from "utils/helper"
import { AdminContainer } from "../styled"

const AdminEmployer: React.FC = () => {
  const [employerDetail, setEmployerDetail] = useState<Employer | null>()
  const { fetching, list } = useAppSelector((state) => state.adminList.users)
  const [search, setSearch] = useState("")

  const dispatch = useAppDispatch()
  const handleDeActive = (value: Employer) => {
    console.log(value)
  }

  const handleShowDetail = (student: Employer) => {
    setEmployerDetail(student)
  }

  const columns: ColumnsType<Employer> = [
    {
      title: "Logo",
      dataIndex: "avatar",
      key: "avatar",
      render: (avt, value) =>
        avt ? (
          <Avatar src={avt} />
        ) : (
          <>
            <Avatar>{value.full_name.at(0)?.toString().toLocaleLowerCase()}</Avatar>
          </>
        ),
    },
    {
      title: "Tên nhà tuyển dụng",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Tên nhà tuyển dụng",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tên công ty",
      dataIndex: "company",
      key: "company",
      render: (company) => company?.name,
    },

    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Trạng thái hoạt động",
      key: "is_active",
      dataIndex: "is_active",
      render: (is_active) => (
        <>
          {is_active ? <Tag color="green">Đang hoạt động</Tag> : <Tag color="magenta">Đã khóa</Tag>}
        </>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleShowDetail(record)} type="primary">
            Xem chi tiết
          </Button>
          <Popconfirm
            title="Bạn có muốn dừng hoạt động của sinh viên này không?"
            okText="Có"
            cancelText="Không"
          >
            <Button danger onClick={() => handleDeActive(record)}>
              Khóa tài khoản
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    dispatch(getAllEmployerAction())
  }, [])

  const handleCloseDetail = () => {
    setEmployerDetail(null)
  }

  const filterEmployer = () => {
    if (!search) return list

    return list?.filter(
      (e) =>
        compareStringNotVi(e.full_name, search) ||
        compareStringNotVi(e?.phone || "", search) ||
        compareStringNotVi(e.email, search) ||
        compareStringNotVi(e.company?.name || "", search)
    )
  }

  return (
    <>
      <EmployerTitle title="Danh sách tài khoản nhà tuyển dụng" />

      <AdminContainer>
        <div>
          <Input
            placeholder="Tìm kiếm tên nhà tuyển dụng hoặc email hoặc số điện thoại hoặc tên công ty"
            allowClear
            value={search}
            onChange={(v) => setSearch(v.target.value)}
          />
        </div>
        <div>
          <Table columns={columns} dataSource={filterEmployer()} loading={fetching} rowKey="id" />
        </div>

        <Drawer
          title="Thông tin chi tiết sinh viên"
          onClose={handleCloseDetail}
          size="large"
          open={Boolean(employerDetail)}
          extra={
            <>
              <Popconfirm
                title="Bạn có muốn dừng hoạt động của tài khoản này không?"
                okText="Có"
                cancelText="Không"
              >
                <Button danger type="dashed">
                  Khóa tài khoản
                </Button>
              </Popconfirm>
            </>
          }
        >
          <Descriptions layout="vertical" className="mb-4" bordered column={4}>
            <Descriptions.Item label="Tên Sinh viên" span={4}>
              <Space>
                {employerDetail?.avatar ? (
                  <Avatar src={employerDetail?.avatar} alt="logo-company" />
                ) : (
                  <Avatar>{employerDetail?.full_name.at(0)?.toString().toUpperCase()}</Avatar>
                )}
                {employerDetail?.full_name}
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" span={2}>
              {employerDetail?.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Mã số" span={2}>
              {employerDetail?.id}
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái hoạt động" span={2}>
              {employerDetail?.is_active ? (
                <Tag color="green">Đang hoạt động</Tag>
              ) : (
                <Tag color="magenta">Đã khóa</Tag>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Thông báo nhận tin nhắn" span={2}>
              {employerDetail?.is_noti ? (
                <Tag color="lime">Nhận thông báo</Tag>
              ) : (
                <Tag color="geekblue">Không nhận thông báo</Tag>
              )}
            </Descriptions.Item>
          </Descriptions>

          <Divider orientationMargin={3} className="ml-5 mb-5">
            Thông tin công ty
          </Divider>

          <Descriptions className="mt-4" column={4} layout="vertical" bordered>
            <Descriptions.Item span={4} label="Tên">
              <Typography.Title level={5} italic>
                {employerDetail?.company?.name || "-"}
              </Typography.Title>
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Webite">
              {employerDetail?.company?.website || ""}
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Số điện thoại">
              {employerDetail?.company?.phone || ""}
            </Descriptions.Item>
            <Descriptions.Item span={4} label="Mô tả">
              {employerDetail?.company?.information || ""}
            </Descriptions.Item>
          </Descriptions>
        </Drawer>
      </AdminContainer>
    </>
  )
}

export default AdminEmployer
