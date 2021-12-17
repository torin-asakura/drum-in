import React      from 'react'

import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Noto+Sans+Display:ital,wght@1,100&family=Source+Sans+3:ital,wght@1,300;1,400')
      html {
        height: 100%;
      }
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      #__next {
        min-height: 100%;
        background-color: #ffffff;
        overflow-x: hidden;
      }
    `}
  />
)
