import React, { useEffect, useState } from "react"
import { DownloadOutlined, EyeOutlined, FilePdfFilled, HeartFilled } from "@ant-design/icons"
import { Button, Col, Image, Row, Spin } from "antd"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { cvActions, getDetailCVAction } from "app/slices/cvSlice"
import { savedCV, removedCV } from "app/slices/savedCV"
import EmployerTitle from "components/Common/EmployerTitle"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { Variable } from "styles/app/variable/Variable"
import { convertDownloadURL, formatDate, formatNullData, formatSalary } from "utils/helper"
import { DetailCVWrapper, HeaderDetailCVLeft, HeaderDetailCVRight, InfoDetailCV } from "./styled"

const DetailCV: React.FC = () => {
  const dispatch = useAppDispatch()
  const { detailCV, isLoading } = useAppSelector((state) => state.cv)
  const router = useRouter()
  const { id } = router.query
  const loadDataDetailCv = async () => {
    dispatch(getDetailCVAction(Number(id)))
  }
  const [saveCV, setSaveCV] = useState(false)
  const { listSavedCV } = useAppSelector((state) => state.savedCV)
  const handleSaveCV = (): void => {
    setSaveCV(() => !saveCV)
    dispatch(savedCV(detailCV))
  }

  const handleDeleteCV = (): void => {
    setSaveCV(() => !saveCV)
    dispatch(removedCV(id))
  }

  useEffect(() => {
    dispatch(cvActions.reset())
    if (!id) return
    loadDataDetailCv()
    setSaveCV(listSavedCV?.some((e) => e.id === Number(id)))
  }, [listSavedCV, router])

  return (
    <DetailCVWrapper>
      <EmployerTitle title="Chi tiết ứng viên" />
      <Spin size="large" spinning={isLoading}>
        <Container padding="4rem">
          <Container backgroundColor={Variable.color.whiteColor} padding="3rem 4rem">
            <div className="detail-cv__header space-bd">
              <HeaderDetailCVLeft>
                <Image
                  fallback="/logo/PC_Logo.png"
                  className="avatar"
                  src={detailCV?.cv?.student?.avatar}
                  alt="avatar-cv"
                />
                <FlexContainer className="info" justifyContent="space-between">
                  <h4 className="info__name">{formatNullData(detailCV?.cv?.student?.full_name)}</h4>
                  <p className="info__specialized">
                    {formatNullData(detailCV?.cv?.student?.profile?.position_wish)}
                  </p>
                  {saveCV ? (
                    <Button className="info__save-profile red" onClick={handleDeleteCV}>
                      <HeartFilled />
                      Bỏ lưu hồ sơ
                    </Button>
                  ) : (
                    <Button className="info__save-profile" onClick={handleSaveCV}>
                      <HeartFilled />
                      Lưu hồ sơ
                    </Button>
                  )}
                </FlexContainer>
              </HeaderDetailCVLeft>

              <HeaderDetailCVRight>
                <div className="file-cv">
                  <h4 className="title">CV đính kèm</h4>
                  <FlexContainer gap="3rem">
                    <a
                      href={detailCV?.cv?.link}
                      className="btn-file"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <EyeOutlined />
                      Mở CV
                    </a>
                    <a href={convertDownloadURL(detailCV?.cv?.link)} className="btn-file" download>
                      <DownloadOutlined />
                      Tải CV
                    </a>
                  </FlexContainer>
                </div>
                <div className="name-file">
                  <FilePdfFilled /> {formatNullData(detailCV?.cv?.title)}
                </div>
              </HeaderDetailCVRight>
            </div>

            <InfoDetailCV>
              <div className="header-title">Thông tin cá nhân</div>
              <Row>
                <Col span={8} className="item">
                  <h4 className="item__title">Email</h4>
                  <p className="hide">
                    <img src="/images/bi_shield-lock-fill.png" alt="no-data" />
                    Thông tin này đã ẩn
                  </p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Số điện thoại</h4>
                  <p className="hide">
                    <img src="/images/bi_shield-lock-fill.png" alt="no-data" /> Thông tin này đã ẩn
                  </p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Tỉnh / Thành phố</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.location?.name)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Ngày sinh</h4>
                  <p>{formatNullData(formatDate(detailCV?.cv?.student?.birthday))}</p>
                </Col>
                <Col span={16} className="item">
                  <h4 className="item__title">Địa chỉ</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.address)}</p>
                </Col>
              </Row>
            </InfoDetailCV>

            <InfoDetailCV>
              <div className="header-title">Thông tin chung</div>
              <Row>
                <Col span={8} className="item">
                  <h4 className="item__title">Vị trí mong muốn</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.position_wish)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Cấp bậc hiện tại</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.level_current)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Cấp bậc mong muốn</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.level_wish)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Mức lương mong muốn</h4>
                  <p>
                    {formatNullData(
                      formatSalary(detailCV?.cv?.student?.profile?.salary_wish, true)
                    )}
                  </p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Ngành nghề</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.category?.name)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Số năm kinh nghiệm</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.experience)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Hình thức làm việc</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.job_type_wish)}</p>
                </Col>
                <Col span={8} className="item">
                  <h4 className="item__title">Địa điểm làm việc</h4>
                  <p>{formatNullData(detailCV?.cv?.student?.profile?.province?.name)}</p>
                </Col>
              </Row>
            </InfoDetailCV>

            <div className="mail-recruitment">
              <div className="mail__title">Thư ứng tuyển</div>
              <div
                className="mail__content"
                dangerouslySetInnerHTML={{ __html: detailCV?.letter || "" }}
              />
            </div>
          </Container>
        </Container>
      </Spin>
    </DetailCVWrapper>
  )
}

export default DetailCV
