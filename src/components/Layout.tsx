import React, { ReactNode } from 'react'
import Header from './Header'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout
