import React, { useState } from "react"
import { UploadOutlined } from "@ant-design/icons"
import { message, Modal, Spin, Upload, UploadFile, UploadProps } from "antd"
import { RcFile, UploadChangeParam } from "antd/lib/upload"
import { RESPONSE_CODES } from "@constants"
import { fileService } from "app/services/fileService"
import { BannerWrapper, UploadImgWrapper } from "./styled"

interface UploadImgProps {
  url?: string
  handleUpload: (url: string) => void | Promise<unknown>
  isCrop?: boolean
  isBanner?: boolean
}
const getBase64 = (file: RcFile, callback?: (url: string) => void): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
    if (!callback) return
    reader.addEventListener("load", () => callback(reader.result as string))
  })

const UploadImg: React.FC<UploadImgProps> = ({
  url,
  handleUpload,
  isCrop = false,
  isBanner = false,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const [fileList, setFileList] = useState<UploadFile[]>(
    url
      ? [
          {
            uid: "1",
            name: "",
            status: "done",
            url,
          },
        ]
      : []
  )
  const [isLoading, setIsLoading] = useState(false)

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>{url ? "Thay đổi ảnh" : "Tải ảnh lên"}</div>
    </div>
  )

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!")
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!")
    }
    return isJpgOrPng && isLt2M
  }

  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    /* eslint-disable  @typescript-eslint/no-non-null-assertion */
    const title = file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(title)
  }

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    setFileList(info.fileList)
    getBase64(info.file.originFileObj as RcFile, (urlImg) => {
      setPreviewImage(urlImg)
    })
  }
  const redenderUpload = () => (
    <Upload
      className="upload__image avatar-uploader"
      name="avatar"
      listType="picture-card"
      fileList={fileList}
      customRequest={async ({ onSuccess, onError, file }) => {
        setIsLoading(true)
        const rs = await fileService.uploadImg(file as File)
        if (rs.code === RESPONSE_CODES.success && onSuccess) {
          const newFile = {
            uid: "1",
            name: (file as File).name,
            status: "done",
            url: rs.data,
          } as UploadFile
          onSuccess(newFile)
          // if (newFile && newFile.url) dispatch(updateImgAction({ avatar: newFile.url }))
          if (newFile && newFile.url) {
            await handleUpload(newFile.url)
          }
          setIsLoading(false)
        } else {
          if (!onError) return
          setFileList([
            {
              uid: " 1",
              name: (file as File).name,
              status: "error",
              url: "",
            },
          ])
          setIsLoading(false)
        }
      }}
      maxCount={1}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      onPreview={handlePreview}
    >
      {uploadButton}
    </Upload>
  )

  return (
    <UploadImgWrapper>
      {isBanner && (previewImage || url) && (
        <Spin spinning={isLoading}>
          <BannerWrapper>
            <img alt="example" style={{ width: "100%" }} src={previewImage || url} />
          </BannerWrapper>
        </Spin>
      )}
      {isCrop ? redenderUpload() : redenderUpload()}
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </UploadImgWrapper>
  )
}

export default UploadImg
