import React      from 'react'

import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.cdnfonts.com/css/gotham-pro');

      html {
        height: 100%;
      }
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      #__next {
        min-height: 100%;
        background-color: #ffffff;
        overflow-x: hidden;
      }
    `}
  />
)
