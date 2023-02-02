import React, { useState, useEffect } from "react"
import { Button, Select, Form, Grid, Drawer } from "antd"
import { EXPERIENCE, JOB_TYPE, LEVEL, SALARY_FILTER } from "@constants"
import { useAppDispatch } from "app/appHook"
import { searchActions } from "app/slices/optionSearch"
import { Experience, JobParams, JobType, Level, SalaryFilter } from "interfaces/Job"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import { btnPrimary, btnSecondary } from "styles/app/variable/Button"
import { BoxFilterWrapper, FormContentWrapper } from "./styled"

const { Option } = Select
const { useBreakpoint } = Grid

interface TypeObjectKey {
  [name: string]: string
}

interface FormContentProps {
  mobileUI?: boolean
  onSubmit?: () => void
  onReset?: () => void
  optionSearch?: JobParams
}

const FormContent: React.FC<FormContentProps> = ({ mobileUI, onSubmit, onReset, optionSearch }) => (
  <FormContentWrapper>
    <Form.Item name="experience" className="form-group select">
      <Select value={optionSearch?.experience} placeholder="Tất cả kinh nghiệm">
        {EXPERIENCE.map((item: Experience) => (
          <Option key={item.id} value={item.id}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>

    <Form.Item name="salary" className="form-group select">
      <Select placeholder="Tất cả mức lương">
        {SALARY_FILTER.map((item: SalaryFilter) => (
          <Option key={item.id} value={JSON.stringify(item.value)}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>

    <Form.Item name="level" className="form-group select">
      <Select placeholder="Tất cả cấp bậc">
        {LEVEL.map((item: Level) => (
          <Option key={item.id} value={item.id}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>

    <Form.Item name="experience2" className="form-group select">
      <Select placeholder="Loại công việc">
        {JOB_TYPE.map((item: JobType) => (
          <Option key={item.id} value={item.id}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
    {!mobileUI ? (
      <div className="form-group btn">
        <Button onClick={onReset} htmlType="reset">
          Xóa chọn
        </Button>
      </div>
    ) : (
      <GridContainer gridTemplateColumns="1fr 1fr" columnGap="1rem" margin="1rem 0 0 0">
        <Button
          style={{ ...btnPrimary, width: "100%", height: "4rem" }}
          onClick={() => onSubmit && onSubmit()}
        >
          Tìm Kiếm
        </Button>
        <Button
          style={{
            ...btnSecondary,
            width: "100%",
            height: "4rem",
          }}
          onClick={onReset}
          htmlType="reset"
        >
          Xóa chọn
        </Button>
      </GridContainer>
    )}
  </FormContentWrapper>
)

interface IBoxFilter {
  optionSearch: JobParams
}

const BoxFilter: React.FC<IBoxFilter> = ({ optionSearch }) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const [jobFilter, setJobFilter] = useState<TypeObjectKey>({})
  // const optionSearch = useAppSelector((state) => state.optionSearch)
  const { reset, addSearch } = searchActions
  const [openDrawerFilter, setOpenDrawerFilter] = useState(false)

  const screens = useBreakpoint()

  const onReset = () => {
    form.resetFields()
    setJobFilter({})
    dispatch(reset())
  }

  const onFinish = (search: JobParams) => {
    if (!screens.md) {
      dispatch(addSearch(search))
    }
  }

  const showDrawerFilter = () => {
    setOpenDrawerFilter(true)
  }

  const onClose = () => {
    setOpenDrawerFilter(false)
  }

  const handleChangeFilter = (search: JobParams) => {
    if (search) {
      if (search?.salary) {
        dispatch(addSearch({ ...search, ...JSON.parse(`${search?.salary}`) }))
      } else {
        dispatch(addSearch(search))
      }
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      experience: optionSearch?.experience,
      salary: optionSearch?.salary,
      level: optionSearch?.level,
    })
  }, [optionSearch])

  useEffect(() => {
    handleChangeFilter(jobFilter)
  }, [jobFilter])

  return (
    <BoxFilterWrapper>
      <Form
        className="form"
        form={form}
        onFinish={onFinish}
        onValuesChange={(e) => {
          if (screens.md) setJobFilter({ ...jobFilter, ...e })
        }}
        initialValues={{
          experience: optionSearch?.experience,
          salary: optionSearch?.salary,
          level: optionSearch?.level,
        }}
        onReset={onReset}
      >
        {screens.md && <FormContent optionSearch={optionSearch} />}
        {!screens.md && (
          <>
            <FlexContainer justifyContent="right">
              <Button onClick={showDrawerFilter}>Lọc nâng cao</Button>
            </FlexContainer>

            <Drawer
              title="Lọc nâng cao"
              placement="right"
              onClose={onClose}
              open={openDrawerFilter && !screens.md}
              bodyStyle={{ padding: "1rem" }}
              headerStyle={{
                textAlign: "center",
                paddingLeft: "1rem",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
              }}
              contentWrapperStyle={{ maxWidth: "28rem" }}
            >
              <FormContent
                mobileUI={!screens.md}
                onSubmit={() => {
                  form.submit()
                  onClose()
                }}
                onReset={onReset}
              />
            </Drawer>
          </>
        )}
      </Form>
    </BoxFilterWrapper>
  )
}

export default BoxFilter
