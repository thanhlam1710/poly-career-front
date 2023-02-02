import React, { useCallback, useEffect, useState } from "react"
import { HeartOutlined, SendOutlined } from "@ant-design/icons"
import { Button, Col, Image, message, notification, Row, Spin, UploadFile } from "antd"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import {
  applyJobAction,
  getJobDetailAction,
  getListJobsAction,
  getListJobsFitAction,
} from "app/slices/jobSlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import { addSavedJob, removeSavedJob } from "app/slices/savedJobSlice"
import BoxDetailJob from "components/Common/BoxDetailJob"
import BoxJob from "components/Common/BoxJob/BoxJob"
import TitleComponent from "components/Common/Title/TitleComponent"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { JobApplyPayload, JobPayload } from "interfaces/Job"
import ModalCV from "./ModalCV"
import { WrapperCurrent, WrapperDetailJobHeader, WrapperDetailJob, WrapperInfoJob } from "./styled"

interface IDataSubmit {
  dragger: UploadFile<APIResponse<string>>[]
  input_edit: string
}

const DetailJob: React.FC = () => {
  const { studentProfile, type, isLoggedIn } = useProfile()
  const router = useRouter()
  const { id } = router.query
  const { listJobsFit, isLoading, detailJob, listJobs } = useAppSelector((state) => state.job)
  const { listProvince } = useAppSelector((state) => state.province)
  const jobSave = useAppSelector((state) => state.savedJob)
  const dispatch = useAppDispatch()

  const [loved, setLoved] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    if (type !== "student")
      return notification.error({
        message: "Bạn cần đăng nhập để ứng tuyển!",
      })
    setIsModalOpen(true)
  }

  const handleLoveJob = (): void => {
    setLoved(() => !loved)
    dispatch(addSavedJob(detailJob))
  }

  const handleDeleteJobSaved = (): void => {
    dispatch(removeSavedJob(Number(id)))
    setLoved(() => !loved)
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [isModalOpen])

  const handleSubmitModal = async (data: IDataSubmit) => {
    const { response, name } = data.dragger[0]
    if (!response) return
    const payloads = {
      job_id: Number(id),
      letter: data.input_edit,
      file_name: name,
      file_url: response.data,
    }

    const result = await dispatch(applyJobAction(payloads))

    const payload = result.payload as APIResponse<JobApplyPayload>

    if (payload.code === RESPONSE_CODES.success) {
      message.success("Bạn đã ứng tuyển thành công")
    }
    setIsModalOpen(false)
  }

  const loadData = async () => {
    if (!id) return
    dispatch(getProvinceAction())
    dispatch(getJobDetailAction({ id: Number(id), student_id: studentProfile?.id }))
    if (!isLoggedIn) {
      dispatch(getListJobsAction({ limit: 10 }))
    } else {
      dispatch(getListJobsFitAction({ job_id: Number(id), limit: 10 }))
    }
  }

  useEffect(() => {
    loadData()
  }, [id])

  useEffect(() => {
    setLoved(jobSave.some((e) => e.id === Number(id)))
  }, [jobSave, id])

  return (
    <Spin size="large" spinning={isLoading}>
      <WrapperDetailJob>
        {detailJob && (
          <div className="detail-job">
            <Head>
              <title>{detailJob?.title}</title>
            </Head>
            <WrapperDetailJobHeader>
              <Row className="header">
                <Col className="header__col" xs={24} sm={17} md={20}>
                  <div className="header__logo">
                    <Image
                      src={detailJob.author?.company?.avatar}
                      fallback="/logo/PC_Logo.png"
                      preview
                      alt="image-logo"
                    />
                  </div>
                  <div className="header__info">
                    <div className="header__info--title">{detailJob?.title}</div>
                    <div className="header__company">
                      <div className="header__company--title">
                        <Link
                          href={
                            detailJob.author?.company?.id
                              ? ROUTES.company.detail(detailJob.author?.company?.id)
                              : ""
                          }
                        >
                          <span>{detailJob.author?.company?.name}</span>
                        </Link>
                      </div>
                      <div className="header__company--deadline">
                        {/* Hạn nộp hồ sơ: {defaultData.deadline} */}
                        Hạn nộp hồ sơ: 7/10/2020
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={7} md={4} className="header__apply">
                  <WrapperCurrent>
                    <Row className="current">
                      {type !== "employer" && (
                        <Col xs={12} sm={24} className="current__col">
                          <Button
                            onClick={showModal}
                            className="current__col--btn btn"
                            type="primary"
                          >
                            <SendOutlined style={{ transform: "rotate(-45deg) translateX(5px)" }} />{" "}
                            Ứng tuyển ngay
                          </Button>
                          <ModalCV
                            isModalOpen={isModalOpen}
                            handleOk={handleSubmitModal}
                            handleCancel={closeModal}
                            title={detailJob?.title}
                          />
                        </Col>
                      )}
                      <Col xs={12} sm={24} className="current__col">
                        {loved ? (
                          <Button
                            onClick={handleDeleteJobSaved}
                            className="saved current__col--btn btn"
                          >
                            <HeartOutlined /> Đã lưu
                          </Button>
                        ) : (
                          <Button onClick={handleLoveJob} className="current__col--btn btn">
                            <HeartOutlined /> Lưu tin
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </WrapperCurrent>
                </Col>
              </Row>
            </WrapperDetailJobHeader>

            <WrapperInfoJob>
              <Row className="m-0" gutter={{ lg: 40 }}>
                <Col sm={24} lg={16}>
                  <div className="info-job__col">
                    <BoxDetailJob defaultData={detailJob} />
                    <div className="info-job__apply">
                      <h3>Cách thức ứng tuyển</h3>
                      <p>
                        Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <span>Ứng tuyển ngay</span> dưới
                        đây.
                      </p>
                      <WrapperCurrent>
                        <Row className="current mt-1 mb-1">
                          {type !== "employer" && (
                            <div className="current__col">
                              <Button
                                onClick={showModal}
                                className="current__col--btn btn"
                                type="primary"
                              >
                                <SendOutlined
                                  style={{ transform: "rotate(-45deg) translateX(5px)" }}
                                />{" "}
                                Ứng tuyển ngay
                              </Button>
                            </div>
                          )}

                          <div className="current__col">
                            {loved ? (
                              <Button
                                onClick={handleDeleteJobSaved}
                                className="saved current__col--btn btn"
                              >
                                <HeartOutlined /> Đã lưu
                              </Button>
                            ) : (
                              <Button onClick={handleLoveJob} className="current__col--btn btn">
                                <HeartOutlined /> Lưu tin
                              </Button>
                            )}
                          </div>
                        </Row>
                      </WrapperCurrent>
                      <p>Hạn nộp hồ sơ: 07/10/2020</p>
                    </div>
                  </div>
                </Col>
                <Col sm={24} lg={8} xs={24}>
                  <div className="info-job__col-n">
                    <div className="info-job__title">
                      <TitleComponent title="Việc làm tương tự" />
                    </div>
                    <div className="recommend-job">
                      {(isLoggedIn ? listJobsFit : listJobs)?.map((item: JobPayload) => (
                        <BoxJob
                          data={item}
                          key={item.id}
                          small
                          border
                          listProvince={listProvince}
                        />
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </WrapperInfoJob>
          </div>
        )}
      </WrapperDetailJob>
    </Spin>
  )
}

export default DetailJob
