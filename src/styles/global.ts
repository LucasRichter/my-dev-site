import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #__next {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
  }

  @font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Bold.eot');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-BoldItalic.eot');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Heavy.eot');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-HeavyItalic.eot');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Light.eot');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-LightItalic.eot');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Italic.eot');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-MediumItalic.eot');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Medium.eot');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LOL';
    src: url('static/assets/fonts/BeaufortforLOL-EOT/BeaufortforLOL-Regular.eot');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


`
