/* eslint-disable react/no-array-index-key */
import React from "react"
import { Col, Image, Row } from "antd"
import { useAppSelector } from "app/appHook"
import TitleComponent from "components/Common/Title/TitleComponent"
import { formatDateWithFormat } from "utils/helper"
import {
  AchievementContainer,
  ContactContainer,
  CvContainer,
  DemoValue,
  EducationContainer,
  HeaederCV,
  MainCV,
  SkillContainer,
  TargetContaner,
  WorkExperienceContainer,
  WrapperCV,
} from "./styled"

interface Props {
  viewRef: React.RefObject<HTMLDivElement>
}

const MinusOutlined = () => <img src="/images/icon/output.png" alt="img" width="16px" />

const CVViews: React.FC<Props> = ({ viewRef }) => {
  const { cv } = useAppSelector((state) => state.cvCreate)
  return (
    <CvContainer>
      <div>
        <WrapperCV ref={viewRef}>
          <HeaederCV bgColor={cv?.main_color}>
            <div className="header__cv--avatar">
              <Image
                width="100%"
                height="100%"
                src={cv?.avatar || ""}
                alt="avatar-cv"
                preview={false}
                fallback="/images/no-profile-picture-icon.webp"
              />
            </div>
            <div className="header__cv--name">
              <span>{cv?.full_name}</span>
              {!cv?.full_name && <DemoValue>Vui lòng nhập họ tên</DemoValue>}
            </div>
            <div className="header__cv--job">
              <span>{cv?.position}</span>
              {!cv?.position && <DemoValue>Vui lòng nhập vị trí ứng tuyển</DemoValue>}
            </div>
          </HeaederCV>
          <MainCV>
            <Row className="cv__row" justify="space-between">
              <Col xl={8} className="cv__col">
                <ContactContainer>
                  <div className="cv__contact">
                    <div className="cv__title">
                      <TitleComponent title="LIÊN HỆ" bgColor={cv?.main_color} />
                    </div>
                    <div className="cv__contact--infor">
                      <div className="infor__icons">
                        <img src="/images/icon/phoneIcon.png" width="16px" alt="phone" />
                      </div>
                      <span>{cv?.phone}</span>
                      {!cv?.phone && <DemoValue>Vui lòng nhập số điện thoại</DemoValue>}
                    </div>
                    <div className="cv__contact--infor">
                      <div className="infor__icons">
                        <img src="/images/icon/mailIcon.png" width="16px" alt="phone" />
                      </div>
                      <span>{cv?.email}</span>
                      {!cv?.email && <DemoValue>Vui lòng nhập email</DemoValue>}
                    </div>
                    <div className="cv__contact--infor">
                      <div className="infor__icons">
                        <img src="/images/icon/homeIcon.png" width="16px" alt="phone" />
                      </div>
                      <span>{cv?.address}</span>
                      {!cv?.address && <DemoValue>Vui lòng nhập địa chỉ</DemoValue>}
                    </div>
                  </div>
                </ContactContainer>
                <SkillContainer>
                  <div className="cv__skill">
                    <div className="cv__title">
                      <TitleComponent title="KỸ NĂNG" bgColor={cv?.main_color} />
                    </div>
                    {cv?.skill?.map((skill, id) => (
                      <div className="cv__skill--detail" key={`${skill?.name}+${id}`}>
                        <div className="cv__skill--title">{skill?.name}</div>
                        <span>
                          <MinusOutlined />
                        </span>
                        <span>{skill?.description}</span>
                      </div>
                    ))}
                    {!cv?.skill?.length && <DemoValue>Vui lòng thêm kỹ năng</DemoValue>}
                  </div>
                </SkillContainer>
                <EducationContainer>
                  <div className="cv__education">
                    <div className="cv__title">
                      <TitleComponent title="HỌC VẤN" bgColor={cv?.main_color} />
                    </div>
                    {!cv?.education?.length && <DemoValue>Vui lòng thêm học vấn</DemoValue>}
                    {cv?.education?.map((edu, index) => (
                      <div className="education__infor" key={`${edu?.name}+${index}`}>
                        <div className="icons">
                          <MinusOutlined />
                        </div>
                        <div>
                          <p>
                            <b>Trường: </b>
                            {edu?.name}
                          </p>
                          <p>
                            <b>Chuyên ngành: </b>
                            {edu?.major}
                          </p>
                          <p>
                            <b>Loại bằng: </b>
                            {edu?.type}
                          </p>
                          <p>
                            <b>Xếp loại: </b>
                            {edu?.grade}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </EducationContainer>
                <AchievementContainer>
                  <div className="cv__achievement">
                    <div className="cv__title">
                      <TitleComponent title="THÀNH TÍCH" bgColor={cv?.main_color} />
                    </div>
                    {cv?.achievements?.map((item, index) => (
                      <div className="achivement__infor" key={`${item?.name}+${index}`}>
                        <div className="icons">
                          <MinusOutlined />
                        </div>
                        <span>{item?.name}</span>
                      </div>
                    ))}
                    {!cv?.achievements?.length && <DemoValue>Vui lòng thêm thành tích</DemoValue>}
                  </div>
                </AchievementContainer>
              </Col>
              <div className="cv__line" />
              <Col xl={15}>
                <TargetContaner>
                  <div className="cv__title">
                    <TitleComponent title="MỤC TIÊU NGHỀ NGHIỆP" bgColor={cv?.main_color} />
                  </div>
                  <div className="target__infor">
                    <p>{cv?.goals}</p>
                    {!cv?.goals && <DemoValue>Vui lòng thêm mục tiêu</DemoValue>}
                  </div>
                </TargetContaner>
                <WorkExperienceContainer>
                  <div className="cv__title">
                    <TitleComponent title="KINH NGHIỆM LÀM VIỆC" bgColor={cv?.main_color} />
                  </div>
                  {!cv?.experience?.length && <DemoValue>Vui lòng thêm kinh nghiện</DemoValue>}
                  {cv?.experience?.map((item, indx) => (
                    <div className="expience__item" key={`${item?.name}-${indx}`}>
                      {!item?.name ? (
                        <DemoValue>Vui lòng thêm tên công ty/Tên dự án</DemoValue>
                      ) : (
                        <h2 className="expience__item--name">{item?.name}</h2>
                      )}
                      <div className="expience__item--time">
                        <p>Thời gian:</p>
                        {item?.time
                          ?.map((t) => formatDateWithFormat(t as string, "MM/YYYY"))
                          .join(" - ")}
                      </div>
                      <div className="expience__item--time">
                        <p>Vị trí:</p>
                        <span>{item?.position}</span>
                      </div>
                      <div className="expience__item--detail">
                        <p>Mô tả: </p>
                        <span>
                          {item?.description ?? <DemoValue>Vui lòng thêm mô tả</DemoValue>}
                        </span>
                      </div>
                    </div>
                  ))}
                </WorkExperienceContainer>
              </Col>
            </Row>
          </MainCV>
        </WrapperCV>
      </div>
    </CvContainer>
  )
}

export default CVViews
