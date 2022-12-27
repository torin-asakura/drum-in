import 'locomotive-scroll/dist/locomotive-scroll.css'

import * as messages     from '../../locales/ru.json'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default App
