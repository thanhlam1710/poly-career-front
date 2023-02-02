import { NextPageWithLayout } from "interfaces/Layout"
import UserLayout from "layout/UserLayout"
import { employerOnly } from "utils/auth-helper"
import DetailCV from "views/Employer/CV/DetailCV"

const DetailCVPage: NextPageWithLayout = () => {
  return <DetailCV />
}
DetailCVPage.authenticate = {
  permissions: employerOnly,
}

DetailCVPage.Layout = UserLayout

export default DetailCVPage
