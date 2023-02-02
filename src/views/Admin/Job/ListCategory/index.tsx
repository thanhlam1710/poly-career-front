import React, { useState } from "react"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, Space, Table } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getCategoryAction } from "app/slices/categorySlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { VALIDATION } from "constants/validate"
import { useAppEffect } from "hook/useAppEffect"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { formMatDate } from "utils/auth-helper"
import { AdminContainer } from "views/Admin/styled"

const ListCategoryContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { listCategories } = useAppSelector((state) => state.categories)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useAppDispatch()

  const columns = [
    {
      title: "Tên loại",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (create_at: string | Date) => formMatDate(create_at),
    },
    {
      title: "Thao tác",
      dataIndex: "Action",
      key: "Action",
      render: () => (
        <>
          <Space>
            <Button type="primary" icon={<EditOutlined />}>
              Chỉnh sửa
            </Button>
            <Button danger icon={<DeleteOutlined />}>
              Xóa
            </Button>
          </Space>
        </>
      ),
    },
  ]

  useAppEffect(() => {
    setLoading(true)
    ;(async () => {
      if (!listCategories?.length) {
        await dispatch(getCategoryAction())
      }
      setLoading(false)
    })()
  })

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <EmployerTitle title="Danh sách các loại tin tuyển dụng" />
      <AdminContainer>
        <div>
          <FlexContainer justifyContent="flex-end" margin="1rem 0">
            <Button icon={<PlusOutlined />} type="primary" onClick={showModal}>
              Tạo mới
            </Button>
          </FlexContainer>
          <Table columns={columns} dataSource={listCategories} rowKey="id" loading={loading} />
        </div>

        <Modal
          title="Tạo mới loại tin tuyển dụng"
          onCancel={handleCancel}
          footer={null}
          open={isModalOpen}
        >
          <Form layout="vertical">
            <Form.Item name="name" label="Tên loại" rules={VALIDATION.onlyRequired}>
              <Input />
            </Form.Item>
            {/* <Form.Item name="parent_id" label="Loại cha" rules={VALIDATION.onlyRequired}>
              <Input />
            </Form.Item> */}
            <FlexContainer justifyContent="center" margin="3rem 0">
              <Button htmlType="submit" type="primary">
                Tạo
              </Button>
            </FlexContainer>
          </Form>
        </Modal>
      </AdminContainer>
    </>
  )
}

export default ListCategoryContainer
