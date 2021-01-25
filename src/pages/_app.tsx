import React from 'react'
import App, { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { appWithTranslation } from '../../i18n'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext))
})

export default appWithTranslation(MyApp)
