import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body , #root {
    min-height: 100%;
  }

  body {
    background: #0E1117;
    -webkit-font-smoothing: antialiased !important;
    overflow-y: hidden;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    color: #222;
  }

  button {
    cursor: pointer;
  }

  &::selection {
    color: #f0f6fb;
    background: #04d361;
  }
`
