import React from "react"
import { Row } from "antd"
import { RESPONSE_CODES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { updateImgEmployerAction } from "app/slices/employerSlice"
import { updateImgStudentAction } from "app/slices/studentSlice"
import TitleEmployerProfile from "components/Common/Title/TitleEmployerProfile"
import UploadImg from "components/Common/Upload/UploadImg"
import { useProfile } from "hook/useProfile"
import { APIResponse } from "interfaces/APIResponse"
import { AvatarProfileContainer } from "./styled"

interface AvatarProfileProps {
  url?: string
  useRole?: string
}

const AvatarProfile: React.FC<AvatarProfileProps> = ({ url, useRole }) => {
  const { updateUser } = useProfile()
  const dispatch = useAppDispatch()
  const handleUpload = async (urlAvt: string) => {
    let response
    switch (useRole) {
      case "student":
        response = await dispatch(updateImgStudentAction({ avatar: urlAvt }))
        break
      case "employer":
        response = await dispatch(updateImgEmployerAction({ avatar: urlAvt }))
        break
      default:
        response = await dispatch(updateImgEmployerAction({ avatar: urlAvt }))
        break
    }
    const payload = response?.payload as APIResponse<unknown>
    if (payload?.code === RESPONSE_CODES.success) {
      await updateUser()
    }
  }
  return (
    <AvatarProfileContainer>
      <TitleEmployerProfile title="Ảnh đại diện" />
      <Row className="avatar__profile--row" align="middle">
        <div className="avatar__handle">
          <UploadImg url={url} handleUpload={handleUpload} isCrop />
          <p>
            {`Dạng file .jpg, .jpeg, .png, dung lượng <= 300KB và kích thước tối thiểu 300x300 pixel.`}
          </p>
        </div>
      </Row>
    </AvatarProfileContainer>
  )
}

export default AvatarProfile
