import React, { useEffect } from "react"
import { Button, Input, Select, Form } from "antd"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getCategoryAction } from "app/slices/categorySlice"
import { searchActions } from "app/slices/optionSearch"
import { getProvinceAction } from "app/slices/provinceSlice"
import { INITIAL_JOB } from "constants/jobs"
import { useAppEffect } from "hook/useAppEffect"
import { Category } from "interfaces/Category"
import { JobParams } from "interfaces/Job"
import { btnPrimary } from "styles/app/variable/Button"
import { convertSelectInput } from "utils/helper"
import { BoxSearchContainer } from "./styled"

interface IBoxSearch {
  optionSearch?: JobParams
}

const BoxSearch: React.FC<IBoxSearch> = ({ optionSearch }) => {
  const { listProvince } = useAppSelector((state) => state.province)
  const { listCategories } = useAppSelector((state) => state.categories)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [form] = Form.useForm()
  const { addSearch } = searchActions

  const handleSubmit = (search: JobParams) => {
    dispatch(addSearch(search))
    router.push(ROUTES.job.list)
  }

  useEffect(() => {
    form.setFieldsValue({
      search: optionSearch?.search,
      category_id: optionSearch?.category_id,
      position: optionSearch?.position,
    })
  }, [optionSearch])

  useAppEffect(() => {
    dispatch(getProvinceAction())
    dispatch(getCategoryAction())
  })

  return (
    <BoxSearchContainer>
      <Form
        className="form"
        initialValues={{
          search: optionSearch?.search,
          category_id: optionSearch?.category_id,
          position: optionSearch?.position,
        }}
        form={form}
        onFinish={handleSubmit}
      >
        <div className="column1">
          <Form.Item name="search" className="form-group input">
            <Input placeholder="Tìm kiếm công việc phù hợp" />
          </Form.Item>
        </div>

        <div className="column2">
          <Form.Item shouldUpdate name="category_id" className="form-group select">
            <Select
              showSearch
              placeholder={INITIAL_JOB.category_id}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              value={optionSearch?.category_id || ""}
              options={[
                ...listCategories.map((item: Category) => ({
                  value: item.id.toString(),
                  label: item.name,
                })),
              ]}
            />
          </Form.Item>
        </div>

        <div className="column3">
          <Form.Item name="position" className="form-group select">
            <Select
              showSearch
              placeholder={INITIAL_JOB.position}
              value={optionSearch?.position}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={convertSelectInput(listProvince)}
            />
          </Form.Item>
        </div>

        <div className="column4">
          <Form.Item className="form-group btn">
            <Button htmlType="submit" style={{ ...btnPrimary, width: "100%" }}>
              Tìm kiếm
            </Button>
          </Form.Item>
        </div>
      </Form>
    </BoxSearchContainer>
  )
}

export default BoxSearch
