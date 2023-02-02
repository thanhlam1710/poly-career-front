import { NextPageWithLayout } from "interfaces/Layout"
import ClientLayout from "layout/ClientLayout"
import Home from "views/Home"

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

// <any>.authenticate: have or not
// HomePage.authenticate = {
// permissions: studentOnly,
// permissions:adminOnly,
// }

// <any>.Layout: have or not

HomePage.Layout = ClientLayout

export default HomePage
