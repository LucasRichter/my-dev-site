import React from 'react'
import Header from './Header'
import Head from 'next/head'

const Layout: React.FC = ({ title, children }) => {
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
