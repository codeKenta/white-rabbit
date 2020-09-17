/** @jsx jsx */
import { css, Global } from '@emotion/core'

import { jsx } from 'theme-ui'

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        scroll-behavior: smooth;
        min-width: 320px;
      }

      body {
        margin: 0;
      }

      a {
        text-decoration: none;
        font-family: inherit;
        color: inherit;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)

export default GlobalStyles
