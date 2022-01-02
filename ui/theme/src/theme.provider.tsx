import React                                     from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { GlobalStyles }                          from './global.styles'
import * as theme                                from './theme'

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
