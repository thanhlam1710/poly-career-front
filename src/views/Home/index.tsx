import React from "react"
import { AreaChartOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons"
import { Carousel, Col, Grid, Pagination, Row, Tabs } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { HOME_BANNER, ROUTES, TOP_COMPANY } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getListJobsAction, getListJobsFitAction } from "app/slices/jobSlice"
import { searchActions } from "app/slices/optionSearch"
import { getProvinceAction } from "app/slices/provinceSlice"
import BoxCompany from "components/Common/BoxCompany"
import BoxJob from "components/Common/BoxJob/BoxJob"
import BoxSearch from "components/Common/BoxSearch/BoxSearch"
import { useAppEffect } from "hook/useAppEffect"
import { HomeBanner, Company } from "interfaces/Home"
import { JobPayload } from "interfaces/Job"
import { Container } from "styles/app/styled/Container/styled"
import { FlexContainer } from "styles/app/styled/FlexContainer/styled"
import { GridContainer } from "styles/app/styled/GridContainer/styled"
import {
  BoxBodyContentItemInfo,
  BoxBodyItemImage,
  BoxTopImage,
  HandBookWrapper,
  HomeWrapper,
  SliderItem,
  TrendingBox,
} from "./styled"

const { useBreakpoint } = Grid

const NewJob = () => {
  const { listJobs, metaJobs } = useAppSelector((state) => state.job)
  const { listProvince } = useAppSelector((state) => state.province)
  const { md } = useBreakpoint()
  const dispatch = useAppDispatch()

  const changePage = (page: number) => {
    dispatch(getListJobsAction({ limit: 12, page }))
  }

  return (
    <Row className="wrapper__hot mt-2">
      <Container width="100%" maxWidth="128rem" margin="0 auto" padding="2rem 0 4rem 0">
        <GridContainer
          columnGap="3.2rem"
          margin="0 0 1rem 0"
          {...(md ? { gridTemplateColumns: "auto 1fr" } : { gridTemplateRows: "auto 1fr" })}
        >
          <h1 className="hot__title">Việc làm mới nhất</h1>
          <Tabs
            defaultActiveKey="1"
            onChange={(tab) => console.log(tab)}
            items={[
              {
                label: "Tất cả",
                key: "1",
                children: "",
              },
              {
                label: "Thực tập",
                key: "2",
                children: "",
              },
              {
                label: "Bán thời gian",
                key: "3",
                children: "",
              },
            ]}
          />
        </GridContainer>
        <Row gutter={[20, 20]}>
          {listJobs?.map((item: JobPayload) => (
            <Col xs={24} md={12} xl={8} key={item.id}>
              <BoxJob data={item} border small listProvince={listProvince} />
            </Col>
          ))}
        </Row>
        <Pagination
          className="pagination text-center mt-2"
          defaultCurrent={metaJobs?.page}
          total={metaJobs?.total}
          defaultPageSize={12}
          onChange={changePage}
        />
      </Container>
    </Row>
  )
}

const JobForYou = () => {
  const { listJobsFit, metaJobsFit } = useAppSelector((state) => state.job)
  const { listProvince } = useAppSelector((state) => state.province)
  const dispatch = useAppDispatch()

  const changePage = (page: number) => {
    dispatch(getListJobsFitAction({ limit: 12, page }))
  }

  return (
    <Row className="wrapper__hot mt-2 mb-6">
      <Container width="100%" maxWidth="128rem" margin="0 auto" padding="2rem 0 4rem 0">
        <Container margin="0 0 1rem 0">
          <h1 className="hot__title">Việc làm dành cho bạn</h1>
        </Container>
        <Row gutter={[20, 20]}>
          {listJobsFit?.map((item: JobPayload) => (
            <Col xs={24} md={12} xl={8} key={item.id}>
              <BoxJob data={item} border small listProvince={listProvince} />
            </Col>
          ))}
        </Row>
        <Pagination
          className="pagination text-center mt-2"
          defaultCurrent={metaJobsFit?.page}
          total={metaJobsFit?.total}
          defaultPageSize={12}
          onChange={changePage}
        />
      </Container>
    </Row>
  )
}

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { addSearch } = searchActions

  const handleLinkCategory = (id: string) => {
    dispatch(addSearch({ category_id: id }))
    router.push(ROUTES.job.list)
  }

  useAppEffect(() => {
    dispatch(searchActions.reset())
    dispatch(getListJobsAction({ limit: 12 }))
    dispatch(getListJobsFitAction({ limit: 12 }))
    dispatch(getProvinceAction())
  })
  return (
    <HomeWrapper className="mb-6">
      <Row className="wrapper__banner">
        <Col className="home__banner" xs={24} md={24} lg={24} xl={24}>
          <Row className="home__banner__slider">
            <Col xs={24} md={24} lg={12} xl={12}>
              <Carousel className="slider__container" autoplay>
                {HOME_BANNER.map((ele: HomeBanner) => (
                  <SliderItem className="slider__item" key={ele.id}>
                    <a href="#" className="slider__item-link">
                      <div className="slider__item-image">
                        <img alt="error" src={ele.urlBanner} />
                      </div>
                    </a>
                  </SliderItem>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col className="sub__banner" xs={24} md={24} lg={24} xl={24}>
          <Row className="sub__banner__box">
            <Col xs={0} md={0} lg={24} xl={24} className="box__top">
              <BoxTopImage>
                <img
                  alt="error"
                  src="https://res.cloudinary.com/hydrocloudinary/image/upload/v1669438346/IMG_6718_f4hohj.jpg"
                />
              </BoxTopImage>
            </Col>
            <Col className="box__body" xs={24} md={24} lg={24} xl={24}>
              <GridContainer
                gridTemplateColumns="13rem 1fr auto"
                columnGap="1rem"
                alignItems="none"
              >
                <Col className="box__body__content-item" xs={24} md={24} xl={6}>
                  <a href="https://executionlab.asia" target="_blank" rel="noreferrer">
                    <BoxBodyItemImage>
                      <img
                        alt="avt-company"
                        src="https://res.cloudinary.com/hydrocloudinary/image/upload/v1669437945/T_ELogo_gp920o.png"
                      />
                    </BoxBodyItemImage>
                  </a>
                </Col>
                <Col className="box__body__content-item" xs={24} md={24} xl={24}>
                  <BoxBodyContentItemInfo>
                    <h2>Intelligent T&E (ExecutionLab)</h2>
                    <FlexContainer gap="2rem">
                      <p>
                        <EnvironmentOutlined /> TP.HCM
                      </p>
                      <p>
                        <GlobalOutlined />{" "}
                        <a href="https://executionlab.asia" target="_blank" rel="noreferrer">
                          executionlab.asia
                        </a>
                      </p>
                    </FlexContainer>
                  </BoxBodyContentItemInfo>
                </Col>
                {/* <Col className="btn-box mt-1 pr-1 d-flex__center al-flex-end">
                  <Form.Item>
                    <Button>Theo dõi</Button>
                  </Form.Item>
                </Col> */}
              </GridContainer>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="wrapper__search mt-2">
        <Container width="100%" maxWidth="128rem" margin="0 auto">
          <Col className="container__search" xs={24} md={24} lg={24} xl={24}>
            <BoxSearch />
          </Col>
        </Container>
      </Row>
      {/* List Job New Start */}
      <NewJob />
      {/* List Job New End */}

      <TrendingBox>
        <Container width="100%" maxWidth="128rem" margin="0 auto" padding="2rem 0 0">
          <Container margin="0 0 1rem 0">
            <h1 className="trending__title">Top ngành nghề nổi bật</h1>
          </Container>
          <FlexContainer className="trending" justifyContent="space-between" gap="2rem">
            <div className="card">
              <div onClick={() => handleLinkCategory("3")} className="trending__item">
                <FlexContainer alignItems="center" gap="2rem">
                  <div className="circle">
                    <AreaChartOutlined />
                  </div>
                  <div className="content">
                    <h3>Thiết kế Web</h3>
                    <p>1,423 việc làm</p>
                  </div>
                </FlexContainer>
              </div>
            </div>
            <div className="card">
              <div onClick={() => handleLinkCategory("7")} className="trending__item">
                <FlexContainer alignItems="center" gap="2rem">
                  <div className="circle">
                    <AreaChartOutlined />
                  </div>
                  <div className="content">
                    <h3>Thương mại điện tử</h3>
                    <p>1,423 việc làm</p>
                  </div>
                </FlexContainer>
              </div>
            </div>
            <div className="card">
              <div onClick={() => handleLinkCategory("4")} className="trending__item">
                <FlexContainer alignItems="center" gap="2rem">
                  <div className="circle">
                    <AreaChartOutlined />
                  </div>
                  <div className="content">
                    <h3>Thiết kế đồ họa</h3>
                    <p>1,423 việc làm</p>
                  </div>
                </FlexContainer>
              </div>
            </div>
            <div className="card">
              <div onClick={() => handleLinkCategory("8")} className="trending__item">
                <FlexContainer alignItems="center" gap="2rem">
                  <div className="circle">
                    <AreaChartOutlined />
                  </div>
                  <div className="content">
                    <h3>Tự động hóa</h3>
                    <p>1,423 việc làm</p>
                  </div>
                </FlexContainer>
              </div>
            </div>
          </FlexContainer>
        </Container>
      </TrendingBox>

      <Row className="wrapper__company mt-2">
        <Container width="100%" maxWidth="128rem" margin="0 auto" padding="2rem 0">
          <Container margin="0 0 1rem 0">
            <h1 className="trending__title">Top công ty nổi bật</h1>
          </Container>
          <Row gutter={[20, 20]}>
            {TOP_COMPANY.map((ele: Company) => (
              <Col className="company__item" xs={12} md={8} xl={4} key={ele.id}>
                <BoxCompany data={ele} />
              </Col>
            ))}
          </Row>
        </Container>
      </Row>
      {/* List Job For You Start */}
      <JobForYou />
      {/* List Job For You End */}

      <HandBookWrapper>
        <Container width="100%" maxWidth="128rem" margin="0 auto" padding="2rem 0">
          <Container margin="0 0 1rem 0" textAlign="center">
            <h1 className="trending__title">Cẩm nang nghề nghiệp</h1>
          </Container>
          <FlexContainer justifyContent="center" flexWrap="wrap" gap="1rem">
            <Link href="#">
              <div className="handbook">
                <img
                  src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2022/12/cong-tac-vien-la-gi-thumbnail.jpeg"
                  alt=""
                />
                <h3>Cộng tác viên là gì? Các vị trí cộng tác viên hot nhất hiện nay</h3>
                <div className="content">
                  <p>
                    Bên cạnh những vị trí nhân viên chính thức tại văn phòng, cộng tác viên cũng là
                    một vị trí phổ biến được nhiều doanh nghiệp tuyển dụng để đáp ứng yêu cầu công
                    việc. Ngoài ra cộng tác viên còn được nhiều người lựa chọn để cải thiện thu
                    nhập. Vậy cộng tác viên […]
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="handbook">
                <img
                  src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2022/12/huong-ngoai-la-gi-12.jpg"
                  alt=""
                />
                <h3>Điểm nổi bật của người hướng ngoại là gì? Phù hợp với công việc nào?</h3>
                <div className="content">
                  <p>
                    Hướng ngoại (extrovert) và hướng nội (introvert) là hai đặc điểm tính cách chính
                    được xác định trong nhiều lý thuyết tâm lý. Trong đó, người hướng ngoại thường
                    thích giao tiếp, hòa đồng, hoạt náo và thân thiện. Bài viết này Việc Làm 24h sẽ
                    giúp bạn hiểu rõ hơn người hướng ngoại là […]
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="handbook">
                <img
                  src="https://nghenghiep.vieclam24h.vn/wp-content/uploads/2022/12/Thu-cam-on-nhan-vien-nghi-viec-06.jpg"
                  alt=""
                />
                <h3>
                  Gợi ý các mẫu thư cảm ơn nhân viên nghỉ việc ấn tượng và tinh tế nhất hiện nay
                </h3>
                <div className="content">
                  <p>
                    Lời cảm ơn bao giờ cũng ý nghĩa và lời cảm ơn nhân viên nghỉ việc vì những đóng
                    góp mà họ đã mang đến cho công ty trong suốt thời gian đồng hành cũng quan trọng
                    không kém. Gửi thư cảm ơn nhân viên nghỉ việc luôn là một trong những nghi thức
                    cần […]
                  </p>
                </div>
              </div>
            </Link>
          </FlexContainer>
        </Container>
      </HandBookWrapper>
    </HomeWrapper>
  )
}

export default Home
