import React, { useEffect } from "react"
import Head from "next/head"
import { Router } from "next/router"
import NProgress from "nprogress"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "app/appStore"
import PrivateRouter from "components/Common/PrivateRouter"
import { AppPropsWithLayout } from "interfaces/Layout"
import "antd/dist/antd.less"
import "styles/scss/index.scss"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || React.Fragment
  const authentication = Component.authenticate

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      NProgress.start()
    })
    Router.events.on("routeChangeComplete", () => {
      NProgress.done(false)
    })
    Router.events.on("routeChangeError", () => {
      NProgress.done(false)
    })
    NProgress.configure({
      showSpinner: false,
    })
  }, [])

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Poly Career</title>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {authentication ? (
            <PrivateRouter authenticate={authentication}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PrivateRouter>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
