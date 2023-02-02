import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Popconfirm,
  Space,
  Tag,
  Table,
  Drawer,
  Descriptions,
  Divider,
  Typography,
  Input,
} from "antd"
import { ColumnsType } from "antd/lib/table"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getAllStudentAction } from "app/slices/adminSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { Student } from "interfaces/Student"
import { compareStringNotVi } from "utils/helper"
import { AdminContainer } from "../styled"

const ListStudentContainer: React.FC = () => {
  const [studentDetail, setStudentDetail] = useState<Student | null>()
  const { fetching, list } = useAppSelector((state) => state.adminList.student)
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState("")

  const handleDeActive = (value: Student) => {
    console.log(value)
  }

  const handleShowDetail = (student: Student) => {
    setStudentDetail(student)
  }

  useEffect(() => {
    dispatch(getAllStudentAction())
  }, [])

  const columns: ColumnsType<Student> = [
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
      title: "Tên sinh viên",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Khu vực",
      dataIndex: "location",
      key: "location",
      render: (location) => location?.name,
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

  const handleCloseDetail = () => {
    setStudentDetail(null)
  }

  const filterStudent = () => {
    if (!search) return list

    return list?.filter(
      (e) =>
        compareStringNotVi(e.full_name, search) ||
        compareStringNotVi(e?.phone || "", search) ||
        compareStringNotVi(e.email, search)
    )
  }

  return (
    <>
      <EmployerTitle title="Danh sách sinh viên" />
      <AdminContainer>
        <div>
          <Input
            placeholder="Tìm kiếm tên sinh viên hoặc email hoặc số điện thoại"
            allowClear
            value={search}
            onChange={(v) => setSearch(v.target.value)}
          />
        </div>
        <div>
          <Table columns={columns} dataSource={filterStudent()} loading={fetching} />
        </div>

        <Drawer
          title="Thông tin chi tiết sinh viên"
          onClose={handleCloseDetail}
          size="large"
          open={Boolean(studentDetail)}
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
                {studentDetail?.avatar ? (
                  <Avatar src={studentDetail?.avatar} alt="logo-company" />
                ) : (
                  <Avatar>{studentDetail?.full_name.at(0)?.toString().toUpperCase()}</Avatar>
                )}
                {studentDetail?.full_name}
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" span={2}>
              {studentDetail?.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Mã số sinh viên" span={2}>
              {studentDetail?.id}
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái hoạt động" span={2}>
              {studentDetail?.is_active ? (
                <Tag color="green">Đang hoạt động</Tag>
              ) : (
                <Tag color="magenta">Đã khóa</Tag>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Thông báo nhận tin nhắn" span={2}>
              {studentDetail?.is_noti ? (
                <Tag color="lime">Nhận thông báo</Tag>
              ) : (
                <Tag color="geekblue">Không nhận thông báo</Tag>
              )}
            </Descriptions.Item>
          </Descriptions>

          <Divider orientationMargin={3} className="ml-5 mb-5">
            Thông tin học tập
          </Divider>

          <Descriptions className="mt-4" column={4} layout="vertical" bordered>
            <Descriptions.Item span={4} label="Bằng cấp">
              <Typography.Title level={5} italic>
                Bằng Cao đẳng
              </Typography.Title>
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Ngày tốt nghiệp">
              12/9/2022
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Loại">
              Giỏi
            </Descriptions.Item>
          </Descriptions>
          <Descriptions className="mt-4" column={4} layout="vertical" bordered>
            <Descriptions.Item span={4} label="Bằng cấp">
              <Typography.Title level={5} italic>
                Bằng đại học
              </Typography.Title>
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Ngày tốt nghiệp">
              12/9/2022
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Loại">
              Giỏi
            </Descriptions.Item>
          </Descriptions>

          <Divider orientationMargin={3} className="ml-5 mb-5">
            Các CV đã nộp
          </Divider>

          <Descriptions className="mt-4" column={4} bordered>
            <Descriptions.Item span={4} label="Tên CV">
              <Typography.Title level={5} italic>
                Tên CV
              </Typography.Title>
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Ngày tạo">
              12/9/2022
            </Descriptions.Item>
            <Descriptions.Item span={2} label="Link">
              <Typography.Link>File</Typography.Link>
            </Descriptions.Item>
          </Descriptions>
        </Drawer>
      </AdminContainer>
    </>
  )
}

export default ListStudentContainer
