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
        <script
          defer
          async
          src="https://unpkg.com/typewriter-effect@latest/dist/core.js"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Work+Sans:wght@400;600&display=swap"
          rel="preload"
          as="style"
        />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
