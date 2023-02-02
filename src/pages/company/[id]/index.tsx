import React from "react"
import { GetServerSideProps } from "next"
import { companyService } from "app/services/companyService"
import { CompanyPayload } from "interfaces/Company"
import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import CompanyProfile from "views/CompanyProfile"

const CompanyProfilePage: NextPageWithLayout<CompanyPayload> = (props) => {
  return <CompanyProfile detailCompany={props} />
}

CompanyProfilePage.Layout = ClientLayout

export default CompanyProfilePage

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await companyService.getCompanyDetail(Number(query.id))
  return {
    props: response.data,
  }
}
