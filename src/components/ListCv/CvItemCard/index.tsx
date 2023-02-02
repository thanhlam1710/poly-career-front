import React, { useCallback } from "react"
import { DownloadOutlined, EditOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons"
import { Button } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { ROUTES } from "@constants"
import { CvDetail } from "interfaces/CV"
import { convertDownloadURL, formatDate } from "utils/helper"
import { CvItemCardWrap } from "./styled"

interface Props {
  data: CvDetail
}
const linkFbShareBase = "https://www.facebook.com/sharer/sharer.php?u="

const CvItemCard: React.FC<Props> = ({ data }) => {
  const router = useRouter()

  const createLinkShareFb = useCallback(() => {
    if (data.link) {
      return data.link
    }

    const baseApp = process.env.NEXT_PUBLIC_APP_URL

    return `${baseApp}${ROUTES.studentCv.editCv.replace("[id]", data.id.toString())}`
  }, [data])

  const shareFbAction = () => {
    const link = createLinkShareFb()
    window.open(
      `${linkFbShareBase}${link}`,
      "",
      "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    )
  }

  return (
    <CvItemCardWrap>
      <div className="box-cv">
        <img
          src="https://res.cloudinary.com/anummio/image/upload/v1671349677/Screenshot_2022-12-18_144726_fg7qn1.png"
          alt="imageCv"
        />
        <div className="box-bg">
          {data.link && !data.cv?.id && (
            <div className="cv-main">
              <StarFilled />
              CV tải lên
            </div>
          )}
          {data.cv?.id && !data.link && (
            <div className="cv-main">
              <StarFilled />
              CV tạo mới
            </div>
          )}
          <div className="box-info">
            <h4 className="title">{data.title}</h4>
            <p className="update_at">
              Ngày tạo <span>{formatDate(data.created_at)}</span>
            </p>
            <ul className="action">
              <li className="action__item">
                <Button
                  onClick={() => shareFbAction()}
                  style={{ padding: 0, color: "white" }}
                  icon={<ShareAltOutlined />}
                  type="text"
                >
                  Chia sẻ lên Facebook
                </Button>
              </li>
              {data.link && (
                <li className="action__item action__item--large">
                  <Link href={convertDownloadURL(data.link)} target="_blank">
                    <>
                      <DownloadOutlined />
                      Tải xuống
                    </>
                  </Link>
                </li>
              )}
              {data.cv && (
                <li className="action__item">
                  <Button
                    icon={<EditOutlined />}
                    style={{ color: "white" }}
                    type="text"
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.studentCv.editCv,
                        query: {
                          id: data.cv?.id,
                        },
                      })
                    }
                  >
                    Chỉnh sửa
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </CvItemCardWrap>
  )
}

export default CvItemCard
