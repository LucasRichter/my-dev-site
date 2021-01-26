import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #153956;
    overflow-x: hidden;
  }

  #__next {
    max-width: 1399px;
    margin: 0 auto;
  }
`
