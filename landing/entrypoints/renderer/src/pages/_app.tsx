import * as messages      from '../../locales/ru.json'

import { ApolloProvider } from '@apollo/client'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'
import { getClient }      from '@globals/data'

const App = ({ Component, pageProps, ...props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <Component {...pageProps} {...props} />
        </ThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  )
}

export default App
