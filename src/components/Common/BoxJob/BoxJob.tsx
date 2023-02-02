import React, { useState, useEffect } from "react"
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons"
import { Image } from "antd"
import Link from "next/link"
import { ROUTES } from "@constants"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { addSavedJob, removeSavedJob } from "app/slices/savedJobSlice"
import { JobPayload } from "interfaces/Job"
import { Province } from "interfaces/Province"
import { Variable } from "styles/app/variable/Variable"
import { formatCurrency } from "utils/helper"
import MapIcons from "../Icons/MapIcons"
import MoneyIcons from "../Icons/MoneyIcons"
import { BoxJobContainer, BoxJobWrapper, InfoStyled } from "./styled"

interface BoxJobProps {
  data: JobPayload
  small?: boolean
  border?: boolean
  listProvince: Province[]
  remove?: boolean
}

const BoxJob: React.FC<BoxJobProps> = ({
  data,
  border = false,
  small,
  listProvince = [],
  remove = false,
}) => {
  const [loved, setLoved] = useState(false)
  const dispatch = useAppDispatch()
  const jobSave = useAppSelector((state) => state.savedJob)
  const handleLoveJob = (): void => {
    setLoved(() => !loved)
    dispatch(addSavedJob(data))
  }

  const handleDeleteJobSaved = (): void => {
    // if (listJob[i].id === data.id) {
    setLoved(() => !loved)
    dispatch(removeSavedJob(data?.id))
    // }
  }

  useEffect(() => {
    setLoved(jobSave.some((e) => e.id === Number(data.id)))
  }, [jobSave])

  return (
    <BoxJobWrapper border={border ? `1px solid ${Variable.color.primaryColor}` : "none"}>
      {small && (
        <Link href={data.id ? ROUTES.job.detail(data.id) : ""}>
          <a className="title--mobile">{data.title}</a>
        </Link>
      )}
      <BoxJobContainer className={small ? "container--small" : ""}>
        {/* "https://res.cloudinary.com/letrung95/image/upload/v1666859521/imagesPolyCareer/banner/momo__logo_kwyjbi.png" */}
        <Image
          src={data.author?.company?.avatar}
          className={small ? "image--small" : ""}
          fallback="/logo/PC_Logo.png"
          preview
          alt="image-logo"
        />
        <InfoStyled>
          <div className="info">
            {!small && (
              <Link href={data.id ? ROUTES.job.detail(data.id) : ""}>
                <a className="info__title">{data.title}</a>
              </Link>
            )}
            <Link
              href={data.author?.company?.id ? ROUTES.company.detail(data.author?.company?.id) : ""}
            >
              <span className="info__company">{data.author?.company?.name}</span>
            </Link>
            <div className="info__wage">
              <div className="info__wage--item">
                <MoneyIcons />
                <p>{formatCurrency(data.salary)}</p>
              </div>
              <div className="info__wage--item">
                <MapIcons />
                {data.province_id &&
                  listProvince.map((item: Province) => {
                    if (item.id.toString() === data.province_id.toString()) {
                      return <p key={item.id}> {item.name}</p>
                    }
                    return null
                  })}
              </div>
            </div>
          </div>
        </InfoStyled>
        {remove ? (
          <button
            className={`icon--loved ${small && "icon--small"}`}
            type="button"
            onClick={handleDeleteJobSaved}
          >
            <DeleteOutlined />
          </button>
        ) : (
          <>
            {loved ? (
              <button
                className={`icon--loved ${small && "icon--small"}`}
                type="button"
                onClick={handleDeleteJobSaved}
              >
                <p className="loved">
                  <HeartOutlined />
                </p>
              </button>
            ) : (
              <button
                className={`icon--loved ${small && "icon--small"}`}
                type="button"
                onClick={handleLoveJob}
              >
                <HeartOutlined />
              </button>
            )}
          </>
        )}
      </BoxJobContainer>
    </BoxJobWrapper>
  )
}

export default BoxJob
