import React                                     from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { GlobalStyles }                          from './global.styles'

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={{}}>{children}</EmotionThemeProvider>
  </>
)
