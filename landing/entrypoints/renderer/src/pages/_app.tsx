import { useApollo }        from '@globals/data'
import * as messages        from '../../locales/ru.json'

import { ApolloProvider } from '@apollo/client'

import React              from 'react'
import { IntlProvider }   from 'react-intl'

import { ThemeProvider }  from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => {
  const client = useApollo(pageProps)

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
