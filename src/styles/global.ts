import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #__next {
    max-width: 1399px;
    margin: 0 auto;
  }
`
