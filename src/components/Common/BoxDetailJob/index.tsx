import React from "react"
import { Col, Row } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getProvinceAction } from "app/slices/provinceSlice"
import { SALARY } from "constants/job"
import { useAppEffect } from "hook/useAppEffect"
import { JobPayload, Salary } from "interfaces/Job"
import { Province } from "interfaces/Province"
import TitleComponent from "../Title/TitleComponent"
import { WrapperBoxDetail } from "./styled"

interface BoxDetailJobProps {
  defaultData: JobPayload
}

const BoxDetailJob: React.FC<BoxDetailJobProps> = ({ defaultData }) => {
  const {
    experience,
    description,
    require,
    benefit,
    count,
    gender,
    address,
    level,
    salary,
    province_id,
  } = defaultData || {}
  const { listProvince } = useAppSelector((state) => state.province)
  const dispatch = useAppDispatch()
  useAppEffect(() => {
    dispatch(getProvinceAction())
  })
  return (
    <WrapperBoxDetail>
      <TitleComponent title="Chi tiết tin tuyển dụng" />
      <div className="info">
        <p>Thông tin chung</p>
        <Row className="info__list">
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/1.svg" alt="" />
            <div className="item__content">
              <strong>Mức lương</strong>
              {SALARY.map((item: Salary) => {
                if (item.id === salary) {
                  return <span key={item.id}>{item.label}</span>
                }
                return <span key={item.id} />
              })}
            </div>
          </Col>
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/5.svg" alt="" />
            <div className="item__content">
              <strong>Số lượng tuyển</strong>
              <span>{count || ""}</span>
            </div>
          </Col>
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/2.svg" alt="" />
            <div className="item__content">
              <strong>Hình thức làm việc</strong>
              <span>Toàn thời gian</span>
            </div>
          </Col>
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/6.svg" alt="" />
            <div className="item__content">
              <strong>Cấp bậc</strong>
              <span>{level || "Nhân viên"}</span>
            </div>
          </Col>
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/3.svg" alt="" />
            <div className="item__content">
              <strong>Giới tính</strong>
              <span>{gender}</span>
            </div>
          </Col>
          <Col className="info__list--item" span={12}>
            <img src="https://www.topcv.vn/v4/image/job-detail/icon/7.svg" alt="" />
            <div className="item__content">
              <strong>Kinh nghiệm tuyển</strong>
              <span>{experience || ""}</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="address">
        <p>Địa điểm làm việc</p>
        <div className="address--content">
          {address || ""}
          {province_id &&
            listProvince.map((item: Province) => {
              if (Number(item.id) === province_id) {
                return <span key={item.id}> {item.name}</span>
              }
              return <span key={item.id} />
            })}
        </div>
      </div>
      <div className="data">
        <h3>Mô tả công việc</h3>
        {/* <pre dangerouslySetInnerHTML={{ __html: description || "" }} /> */}
        <p>{description}</p>
        <h3>Yêu cầu ứng viên</h3>
        {/* <pre dangerouslySetInnerHTML={{ __html: require || "" }} /> */}
        <p>{require}</p>
        <h3>Quyền lợi</h3>
        {/* <pre dangerouslySetInnerHTML={{ __html: benefit || "" }} /> */}
        <p>{benefit}</p>
      </div>
    </WrapperBoxDetail>
  )
}

export default BoxDetailJob
