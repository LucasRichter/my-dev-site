import React, { ReactNode } from 'react'
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<Props> = ({ title, children, description }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
