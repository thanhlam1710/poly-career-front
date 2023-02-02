import React, { useEffect } from "react"
import { Col, Row } from "antd"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { getCompanyDetailAction } from "app/slices/companySlice"
import AddressCompany from "components/CompanyProfile/AddressCompany"
import AvatarCompany from "components/CompanyProfile/AvatarCompany"
import IntroducCompany from "components/CompanyProfile/IntroducCompany"
import JobsCompany from "components/CompanyProfile/JobsCompany"
import { APIResponse } from "interfaces/APIResponse"
import { CompanyPayload } from "interfaces/Company"
import { CompanyProfileWrapper } from "./styled"

interface CompanyProfileProps {
  detailCompany: CompanyPayload
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ detailCompany }) => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useAppDispatch()

  const loadDataCompany = async () => {
    if (!id) return
    const companyDetail = await dispatch(getCompanyDetailAction(Number(id)))
    const payloadCompany = companyDetail.payload as APIResponse<CompanyPayload>
    if (payloadCompany.code !== RESPONSE_CODES.success) {
      router.push(ROUTES.home)
    }
  }
  useEffect(() => {
    loadDataCompany()
  }, [id])
  return (
    <CompanyProfileWrapper>
      {detailCompany && (
        <div className="container">
          <Head>
            <title>{detailCompany?.name}</title>
          </Head>
          <AvatarCompany data={detailCompany} />
          <Row className="company__row" justify="space-between">
            <Col xs={24} sm={24} md={24} lg={24} xl={16}>
              <Row>
                <IntroducCompany introductCompany={detailCompany} />
              </Row>
              <Row className="company__row">
                <JobsCompany />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={7}>
              <AddressCompany addressCompany={detailCompany} />
            </Col>
          </Row>
        </div>
      )}
    </CompanyProfileWrapper>
  )
}

export default CompanyProfile
