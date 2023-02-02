import React, { useState } from "react"
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, Space, Table } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getCompanyActivitiesAction } from "app/slices/companySlice"
import EmployerTitle from "components/Common/EmployerTitle"
import { VALIDATION } from "constants/validate"
import { useAppEffect } from "hook/useAppEffect"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { AdminContainer } from "views/Admin/styled"

const CompanyActivitiesContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { companyActivities } = useAppSelector((state) => state.company)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useAppDispatch()

  const columns = [
    {
      title: "Tên lĩnh vực",
      dataIndex: "name",
      key: "name",
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
      if (!companyActivities?.length) {
        await dispatch(getCompanyActivitiesAction())
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
      <EmployerTitle title="Danh sách các ngành nghề chính" />
      <AdminContainer>
        <div>
          <FlexContainer justifyContent="flex-end" margin="1rem 0">
            <Button icon={<PlusOutlined />} type="primary" onClick={showModal}>
              Tạo mới
            </Button>
          </FlexContainer>
          <Table columns={columns} dataSource={companyActivities} rowKey="id" loading={loading} />
        </div>

        <Modal title="Tạo mới ngành nghề" onCancel={handleCancel} footer={null} open={isModalOpen}>
          <Form layout="vertical">
            <Form.Item name="name" label="Tên ngành nghề" rules={VALIDATION.onlyRequired}>
              <Input />
            </Form.Item>
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

export default CompanyActivitiesContainer
