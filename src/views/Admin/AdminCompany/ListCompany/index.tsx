import React, { useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Descriptions,
  Drawer,
  Image,
  Input,
  Popconfirm,
  Space,
  Table,
  Tag,
} from "antd"
import { ColumnsType } from "antd/lib/table"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getAllCompanyAction } from "app/slices/adminSlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { Company } from "interfaces/Company"
import { compareStringNotVi } from "utils/helper"
import { AdminContainer } from "views/Admin/styled"
import { ListCompanyWrapper } from "./styled"

const ListCompanyContainer: React.FC = () => {
  const [detailCompany, setDetailCompany] = useState<Company | null>(null)
  const [search, setSearch] = useState("")
  const dispatch = useAppDispatch()
  const { list, fetching } = useAppSelector((state) => state.adminList.companies)

  const handleShowDetail = (data: Company) => {
    setDetailCompany(data)
  }

  const handleDeActive = (data?: Company) => {
    console.log(data)
  }

  useEffect(() => {
    dispatch(getAllCompanyAction())
  }, [])

  const columns: ColumnsType<Company> = [
    {
      title: "Logo",
      dataIndex: "avatar",
      key: "avatar",
      render: (avt, value) =>
        avt ? (
          <Avatar src={avt} alt="Avt company" />
        ) : (
          <>
            <Avatar>{value.name?.at(0)?.toString()?.toLocaleLowerCase()}</Avatar>
          </>
        ),
    },
    {
      title: "Tên công ty",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Khu vực",
      dataIndex: "province",
      key: "province",
      render: (province) => province?.name,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Lĩnh vực hoạt động",
      dataIndex: "company_activity",
      key: "company_activity",
      render: (company_activity) => company_activity?.name,
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
            title="Bạn có muốn dừng hoạt động của công ty này không?"
            okText="Có"
            cancelText="Không"
          >
            <Button danger onClick={() => handleDeActive(record)}>
              Khóa công ty
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleCloseDetail = () => {
    setDetailCompany(null)
  }

  const filterCompany = () => {
    if (!search) return list

    return list?.filter(
      (e) =>
        compareStringNotVi(e.name, search) ||
        compareStringNotVi(e.phone, search) ||
        compareStringNotVi(e.tax_code, search)
    )
  }

  return (
    <>
      <EmployerTitle title="Danh sách công ty" />
      <AdminContainer>
        <div>
          <Input
            placeholder="Tìm kiếm tên công ty hoặc mã số thuế hoặc số điện thoại"
            allowClear
            value={search}
            onChange={(v) => setSearch(v.target.value)}
          />
        </div>
        <ListCompanyWrapper>
          <Table columns={columns} dataSource={filterCompany()} loading={fetching} rowKey="id" />
        </ListCompanyWrapper>

        <Drawer
          title="Chi tiết công ty"
          onClose={handleCloseDetail}
          size="large"
          open={Boolean(detailCompany)}
          extra={
            <>
              <Popconfirm
                title="Bạn có muốn dừng hoạt động của công ty này không?"
                okText="Có"
                cancelText="Không"
              >
                <Button danger type="dashed">
                  Khóa công ty
                </Button>
              </Popconfirm>
            </>
          }
        >
          {detailCompany?.banner && (
            <div>
              <Image
                src={detailCompany?.banner}
                fallback="/images/banner_default.png"
                alt="banner"
                width="100%"
              />
            </div>
          )}
          <Descriptions layout="vertical" bordered column={4}>
            <Descriptions.Item label="Tên công ty" span={4}>
              <Space>
                {detailCompany?.avatar ? (
                  <Avatar src={detailCompany?.avatar} alt="logo-company" />
                ) : (
                  <Avatar>{detailCompany?.name.at(0)?.toString().toUpperCase()}</Avatar>
                )}
                {detailCompany?.name}
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" span={2}>
              {detailCompany?.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Mã số thuế" span={2}>
              {detailCompany?.tax_code}
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái hoạt động" span={2}>
              {detailCompany?.is_active ? (
                <Tag color="green">Đang hoạt động</Tag>
              ) : (
                <Tag color="magenta">Đã khóa</Tag>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Thông báo nhận tin nhắn" span={2}>
              {detailCompany?.is_noti ? (
                <Tag color="lime">Nhận thông báo</Tag>
              ) : (
                <Tag color="geekblue">Không nhận thông báo</Tag>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Quy mô nhân sự" span={2}>
              {detailCompany?.size}
            </Descriptions.Item>
            <Descriptions.Item label="Lĩnh vực hoạt động" span={2}>
              {detailCompany?.company_activity?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Website" span={4}>
              {detailCompany?.website}
            </Descriptions.Item>
            <Descriptions.Item label="Khu vực" span={4}>
              {detailCompany?.province?.name}
            </Descriptions.Item>

            <Descriptions.Item label="Địa chỉ" span={4}>
              {detailCompany?.address}
            </Descriptions.Item>

            <Descriptions.Item label="Thông tin chi tiết" span={4}>
              {detailCompany?.information}
            </Descriptions.Item>
          </Descriptions>
        </Drawer>
      </AdminContainer>
    </>
  )
}

export default ListCompanyContainer
